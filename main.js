$(document).ready(function($) {

	var api = "http://api.openweathermap.org/data/2.5/weather?q=madrid&appid=***";

	$.getJSON(api, function(data) {
			
			alert(data.coord.lon);
	});


	// $.ajax({
	// 	url: 'http://api.openweathermap.org/data/2.5/weather?q=madrid&appid=***',
	// 	dataType: 'jsonp',
	// 	data: {
	// 		q: 'city name',
	// 	},
	// 	success: function(response){
	// 		console.log(response.coord);
	// 	}

	// });

});