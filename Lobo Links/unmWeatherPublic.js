/**
 * Function: KtoF
 * Converts Kelvin to Fahrenheit. 
 */ 
function KtoF(k) {
	var f = 1.8 * (k - 273) + 32;
	return f;
}

/** 
 * Function: weather
 * Uses getJSON function from jQuery to access the weather information
 * at UNM through its latitude and longitude. OpenWeatherMap's API is utilized 
 * to display and gather the weather data. 
 */
	
document.addEventListener('DOMContentLoaded', function weather() {
	
	var unm_weather = "https://api.openweathermap.org/data/2.5/weather?lat=35.0937&lon=-106.6217106&APPID=";  //Enter API key for openweathermap 
	$.getJSON(unm_weather,function(unm){
		//display here
		document.getElementById("weather_at_unm").innerHTML =
			"Current Temp: "+ Math.round(KtoF(unm.main.temp)) 
			+ "&#8457 <br />";
		document.getElementById("mm_weather").src 
			= "pics\\mmtemp.png"; 
		document.getElementById("min_max_temp").innerHTML
		       	+= "High / Low:" + "<br />"
	                + Math.round(KtoF(unm.main.temp_max))+ "&#8457" +
		        "&emsp;";
		document.getElementById("min_max_temp").innerHTML 
			+=Math.round(KtoF(unm.main.temp_min))+ 
			"&#8457" + "<br />"; 	
		document.getElementById("weather_status").src = 
	         	"http://openweathermap.org/img/w/" +
		        unm.weather[0].icon + ".png";
		document.getElementById("weather_credits").innerHTML = 
                         "Weather data provided by OpenWeatherMap.";
		document.getElementById("currently").innerHTML = "Currently: " 
			 + unm.weather[0].main;;
	})
});
	
	
