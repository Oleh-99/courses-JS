(function($) {

	var apiKey = '35db184017637f2f4de0b6667c28da23'; 

	function searchHelp() {
		var arrDataSearch = [];	
		$('.input-search').on('keyup', function() {
			var $thisInput = $('.input-search').val();
		
			if (3 <= $thisInput.length) {
				if('undefined' === typeof arrDataSearch['conutryName_' + $thisInput]) {
					showLoader();
					$.ajax({
						url: `http://api.openweathermap.org/data/2.5/find?q=${$thisInput}&appid=${apiKey}&units=metric`, 
						success: function(data) {
							if (0 !== data.count) {
								arrDataSearch['conutryName_' + $thisInput] = data;
								rendersearchHelp(arrDataSearch['conutryName_' + $thisInput]);
							}
						},
						complete: function() {
							hideLoader();
						},
						error: function() {
							alert('Error');
						}
					});
				} else {
					rendersearchHelp(arrDataSearch['conutryName_' + $thisInput]);
				}
			} else {
				removeSearch();
			};
		});
	}

	function rendersearchHelp(data) {
		removeSearch();
		$('.wrapper-input-search').prepend('<div class="search-help"></div>'); 

		for (let index = 0; index < data.count; index++) {
			$('.search-help').append(`
				<div class="country" data-id="${data.list[index].id}">
					<div class="search-name">${data.list[index].name},${data.list[index].sys.country} <img src="https://www.countryflags.io/${data.list[index].sys.country}/flat/24.png"></div>
					<div class="search-foto"><img src="http://openweathermap.org/img/wn/${data.list[index].weather[0].icon}@2x.png"></div>
					<div class="search-temp">${parseInt(data.list[index].main.temp)}°C</div>
				</div>
			`);
		};
	}

	function searchCountryId() {
		var arrSearchHelp = [];
		$(document).on('click', '.country', function(e) {
			let $this = $(this);
			let id = $this.data('id');

			if('undefined' === typeof arrSearchHelp['conutryId_' + id]) {
				showLoader();
				$.ajax({
					url: `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&lang=RU`, 
					success: function(data) {
						arrSearchHelp['conutryId_' + id] = data;
						renderWeather(arrSearchHelp['conutryId_' + id]);
					},
					complete: function() {
						hideLoader();
					},
					error: function() {
						alert('Error');
					}
				});
			} else {
				renderWeather(arrSearchHelp['conutryId_' + id]);
			};
		});
	}

	function renderWeather(info) {
		$('.information').remove();
		removeSearch();
		initMap(info.coord.lat, info.coord.lon);
		$('.content').append(`
			<div class="information">
				<div class="row">
					<div class="col-6">
						<div class="weather-col1">
							<div class="name">${info.name}</div>
							<div class="country-flag">Country: <img src="https://www.countryflags.io/${info.sys.country}/flat/32.png"></div>
						</div>
					</div>
					<div class="col-6">
						<div class="weather-temp">
							<div><img src="http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png"></div>
							<div class="temp">${parseInt(info.main.temp - 273.15)}°C</div>
						</div>
						<div class="weather-detail">${info.weather[0].description}</div>
					</div>
				</div>
				<div>Temp-min <span class="temp-min">${parseInt(info.main.temp_min - 273.15)}°C</span></div>
				<div>Temp-max <span class="temp-max">${parseInt(info.main.temp_max - 273.15)}°C</span></div>
				<div>Temp-feels like <span class="temp-feels">${parseInt(info.main.feels_like - 273.15)}°C</span></div>
				<div>Humidity ${info.main.humidity} %</div>
				<div>Pressure ${info.main.pressure} hPa</div>
				<div>Wind speed ${info.wind.speed} m/s</div>
				<div>wind gust ${info.wind.gust} m/s</div>
				<div>Clouds ${info.clouds.all} %</div>	
			</div>
		`);
		$('.form-search').append('<button class="btn-value">°F</button>');
	}

	function translateValue() {
		$(document).on('click', '.btn-value', function(e) {
			e.preventDefault();
			var $thisBtn = $('.btn-value');
			var $temp = $('.temp');
			var $tempMin = $('.temp-min');
			var $tempMax = $('.temp-max');
			var $tempFeels = $('.temp-feels');
			
			if ($thisBtn.hasClass('value-F')) {
				$thisBtn.removeClass('value-F');
				$thisBtn.addClass('value-C');
				$thisBtn.text('°F');
				converF($temp);
				converF($tempMin);
				converF($tempMax);
				converF($tempFeels);
			} else {
				$thisBtn.removeClass('value-C');
				$thisBtn.addClass('value-F');
				$thisBtn.text('°C');
				converC($temp);
				converC($tempMin);
				converC($tempMax);
				converC($tempFeels);
			}
		})
	}

	function converF(el) {
		return el.text(parseInt((parseInt(el.text()) - 32) / 1.8) + '°C');
	}

	function converC(el) {
		return el.text(parseInt((parseInt(el.text()) * 1.8) + 32) + '°F');
	}

	function removeSearch() {
		$('.search-help').remove();
	}

	function showLoader() {
		$('.loader').show();
	}

	function hideLoader() {
		$('.loader').hide();
	}

	function initMap(lat, lng) {
		let map;
		map = new google.maps.Map(document.getElementById("map"), {
			center: { lat: lat, lng: lng },
			zoom: 10,
		});
	}

	function geolocationsuccess(pos) {
		var crd = pos.coords;
		renderGgeolocation(crd.latitude, crd.longitude);
	}

	function geolocationerror() {
		renderGgeolocation(50.4333, 30.5167);
	}

	function renderGgeolocation(lat, lon) {
		$.ajax({
			url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=RU`, 
			success: function(data) {
				renderWeather(data);
			},
			complete: function() {
				hideLoader();
			},
			error: function() {
				alert('Error');
			}
		});
	}

	$(document).ready(function() {
		navigator.geolocation.getCurrentPosition(geolocationsuccess, geolocationerror);
		searchHelp();
		translateValue();
		searchCountryId();
	});

})(jQuery);
