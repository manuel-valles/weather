$(document).ready(function($) {
	//GET GEOLOCATION
  	var ip = "https://ipinfo.io/json/"
	$.getJSON(ip, function(data1){
  		var loc = data1.loc.split(',');
		var lat = loc[0];
		var lon = loc[1];
		// 1. GET API & JSON
    	var api = 'https://api.darksky.net/forecast/[YOUR API]/' + lat + ',' + lon + '?units=si';
		// console.log(api);  //Good way to check results.
		$.ajax({
	      type:'GET',
	      url: api,
	      dataType: 'jsonp',
	      success: function (data2){
				// TEMPERATURE
				// Get the temperature in Kelvin
				// alert(data.main.temp);
				// Temperature in Celsius
				var tempC = Math.floor(data2.currently.temperature);
				// Temperature in Fahrenheit
				var tempF = Math.floor(9/5 * tempC + 32);


				// REST OF DATA FROM API
				var city = data1.city;
				var icon = data2.currently.icon;
				var description = icon;
				var speedMph = (2.237*data2.currently.windSpeed).toFixed(0);
				var speedKph = (3.6*data2.currently.windSpeed).toFixed(0);
				var speedSwap = true;

				$("#city").html(city);
	      		var Icons = {
	            "clear-day": "wi wi-day-sunny",
	            "clear-night":"wi wi-night-clear",
	            "rain": "wi wi-rain",
	            "snow": "wi wi-snow",
	            "sleet": "wi wi-sleet",
	            "wind": "wi wi-wind",
	            "fog": "wi wi-fog",
	            "cloudy": "wi wi-cloudy",
	            "partly-cloudy-day": "wi wi-day-cloudy", 
	            "partly-cloudy-night": "wi wi-night-alt-cloudy",
	            "unknow": "wi wi-day-sunny"
	          	};
	     		$("#icon").addClass(Icons[icon]);
				$("#weather").html(description);
				var mainStyle1 = {
					fontSize: "130%",
					color: "white"
				};
				var secondStyle1 = {
					fontSize: "80%",
					color: "black"
				}
				$("#tempC").html(tempC+"&deg;");
				$("#swapC").click(function(event) {
					$("#tempC").html(tempC+"&deg;");
					$(this).css(mainStyle1);
					$("#swapF").css(secondStyle1);
				});
				$("#swapF").click(function(event) {
					$("#tempC").html(tempF+"&deg;");
					$(this).css(mainStyle1);
					$("#swapC").css(secondStyle1);
				});
				var mainStyle2 = {
					fontSize: "90%",
					color: "white"
				};
				var secondStyle2 = {
					fontSize: "60%",
					color: "black"
				};
				$("#speedKph").html(speedKph);
				$("#swapKph").click(function(event) {
					$("#speedKph").html(speedKph);
					$(this).css(mainStyle2);
					$("#swapMph").css(secondStyle2);
				});
				$("#swapMph").click(function(event) {
					$("#speedKph").html(speedMph);
					$(this).css(mainStyle2);
					$("#swapKph").css(secondStyle2);
				});
				if (description == "clear-day" || description == "clear-night"  ){
					$("body").css("background-image", "url(img/clearsky.jpg)");
				} else if (description == "partly-cloudy-day" || description == "partly-cloudy-night" ){
					$("body").css("background-image", "url(img/fewclouds.jpg)");
				} else if (description == "cloudy"){
					$("body").css("background-image", "url(img/scatteredclouds.jpg)");
				} else if (description == "rain" || description == "sleet"){
					$("body").css({
						backgroundImage: "url(img/rain.jpg)",
						color: "white"
					});
				} else if (description == "snow"){
					$("body").css("background-image", "url(img/snow.jpg)");
				} else if (description == "fog"){
					$("body").css("background-image", "url(img/mist.jpg)");
				} else{
					$("body").css("background-image", "url(img/sunny.jpg)");
				}
		    }
		});
	});
});