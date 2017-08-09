function KtoF(k) {
	var f = 1.8 * (k - 273) + 32;
	return f;
}

	
document.addEventListener('DOMContentLoaded', function weather() {
	
	var unm_weather = "https://api.openweathermap.org/data/2.5/weather?lat=35.0937&lon=-106.6217106&APPID=c0c39d08dc75ce9682d3b888f6bc5999";
	$.getJSON(unm_weather,function(unm){
		//display here
		document.getElementById("weather_at_unm").innerHTML =
			"Temperature(F):"+ Math.round(KtoF(unm.main.temp)) 
			+ "<br />";
		document.getElementById("weather_at_unm").innerHTML
		       	+="Minimum temp:" +
		       	Math.round(KtoF(unm.main.temp_min))+ "<br />";
		document.getElementById("weather_at_unm").innerHTML 
			+="Maximum temp:" +
		       	Math.round(KtoF(unm.main.temp_max))+ "<br />"; 
		
		document.getElementById("weather_status").src = 
	         	"http://openweathermap.org/img/w/" +
		        unm.weather[0].icon + ".png";
		document.getElementById("weather_credits").innerHTML = 
                         "Weather data provided by OpenWeatherMap.";
	})
});
	
	
