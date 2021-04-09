(function($) {

function searchHelp() {
	var arrDataSearch = [];	
	$(document).on('keyup', '.input-search', function() {
		$thisInput = $('.input-search').val();
	
		if (3 <= $thisInput.length) {
			if('undefined' === typeof arrDataSearch['conutryName_' + $thisInput]) {
				$.ajax({
					url: `http://api.openweathermap.org/data/2.5/find?q=${$thisInput}&appid=35db184017637f2f4de0b6667c28da23&units=metric`, 
					success: function(data) {
						if (0 !== data.count) {
							arrDataSearch['conutryName_' + $thisInput] = data;
							rendersearchHelp(arrDataSearch['conutryName_' + $thisInput]);
						}
					}
				});
			} else {
				rendersearchHelp(arrDataSearch['conutryName_' + $thisInput]);
			}
		} else {
			$('.search-help').remove();
		};
	});
}

function rendersearchHelp(data) {
	$('.search-help').remove();
	$('.wrapper-input-search').prepend('<div class="search-help"></div>'); 

	for (let index = 0; index < data.count; index++) {
		$('.search-help').append(`
			<div class="country" data-id="${data.list[index].id}">
				<div class="search-name">${data.list[index].name},${data.list[index].sys.country}</div>
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
			$.ajax({
				url: `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=35db184017637f2f4de0b6667c28da23&lang=RU`, 
				success: function(data) {
					arrSearchHelp['conutryId_' + id] = data;
					renderWeather(arrSearchHelp['conutryId_' + id]);
				}
			});
		} else {
			renderWeather(arrSearchHelp['conutryId_' + id]);
		};
	});
}

function searchCity() {
	var arrSearchCity = [];
	$(document).on('click', '.search', function(e) {
		e.preventDefault();
		let $thisInput = $('.input-search').val();
	
		if('undefined' === typeof arrSearchCity['conutryName_' + $thisInput]) {
			$.ajax({
				url: `http://api.openweathermap.org/data/2.5/weather?q=${$thisInput}&appid=35db184017637f2f4de0b6667c28da23&lang=RU`, 
				success: function(data) {
					arrSearchCity['conutryName_' + $thisInput] = data;
					renderWeather(arrSearchCity['conutryName_' + $thisInput]);
				}
			});
		} else {
			renderWeather(arrSearchCity['conutryName_' + $thisInput]);
		};
	});
}

function renderWeather(info) {
	$('.information').remove();
	$('.search-help').remove();
	getMap([info.coord.lat, info.coord.lon], info.name);
	$('.content').append(`
		<div class="information">
			<div class="row">
				<div class="col-6">
					<div class="weather-col1">
						<div class="name">${info.name}</div>
						<div>Country: ${info.sys.country}</div>
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
		$thisBtn = $('.btn-value');
		
		if($thisBtn.hasClass('value-F')) {
			$thisBtn.removeClass('value-F');
			$thisBtn.addClass('value-C');
			$thisBtn.text('°F');
			converF($('.temp'));
			converF($('.temp-min'));
			converF($('.temp-max'));
			converF($('.temp-feels'));
		} else {
			$thisBtn.removeClass('value-C');
			$thisBtn.addClass('value-F');
			$thisBtn.text('°C');
			converC($('.temp'));
			converC($('.temp-min'));
			converC($('.temp-max'));
			converC($('.temp-feels'));
		}
	})
}

function converF(el) {
	return el.text(parseInt((parseInt(el.text()) - 32) / 1.8) + '°C');
}

function converC(el) {
	return el.text(parseInt((parseInt(el.text()) * 1.8) + 32) + '°F');
}


var map = null;
// map.removeLayer(map)

function getMap(position, tooltip) {

	if (map === null) {
		map = L.map('map').setView(position, 12);
	} else return

	L.tileLayer('http://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png', {
		attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	
	L.marker(position).addTo(map).bindPopup(tooltip).openPopup();
}

function geosuccess(pos) {
	var crd = pos.coords;
	renderGgeolocation(crd.latitude, crd.longitude);
}

function geoerror() {
	renderGgeolocation(50.4333, 30.5167);
}

function renderGgeolocation(lat, lon) {
	$.ajax({
		url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=35db184017637f2f4de0b6667c28da23&lang=RU`, 
		success: function(data) {
			renderWeather(data);
		}
	});
}

$(document).ready(function() {
	navigator.geolocation.getCurrentPosition(geosuccess, geoerror);
	searchHelp();
	searchCity();
	translateValue();
	searchCountryId();
})

})(jQuery);
