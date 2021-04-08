
$(document).on('click', '.search', function(e) {
	var id = parseInt($('.input').val())


$.ajax({
	url: `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=35db184017637f2f4de0b6667c28da23&lang=RU`, 
	async: false,
	success: function(data) { 
		info = data;
		test ();
	}
})
} )




function test () {
	console.log(info);
	$('.information').remove();
	
	$('.content').append(`
		<div class="information">
			<div>${info.name}</div>
			<div>Country: ${info.sys.country}</div>
			<div>${info.weather[0].description}</div>
			<div><img src="http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png"></div>
			<div>Temp ${parseInt(info.main.temp - 273.15)} C</div>
			<div>Temp-min ${parseInt(info.main.temp_min - 273.15)} C</div>
			<div>Temp-max ${parseInt(info.main.temp_max - 273.15)} C</div>
			<div>Temp-feels like ${parseInt(info.main.feels_like - 273.15)} C</div>
			<div>Humidity ${info.main.humidity} %</div>
			<div>Pressure ${info.main.pressure} hPa</div>
			<div>Wind speed ${info.wind.speed} m/s</div>
			<div>wind gust ${info.wind.gust} m/s</div>
			<div>Clouds ${info.clouds.all} %</div>	
		</div>
	`)
}