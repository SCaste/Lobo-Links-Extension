/**
 * Function: gymStatus
 * Displays to "gym_status" whether the Johnson Center is open or closed.
 */

window.addEventListener("load",function gymStatus() {
	var gymState = ["pics\\gymOpen.png",
	       		"pics\\gymClosed.png"];	

	var now = new Date(); 

     /* Tests to see if the day is a weekday or a weekend
	in order to display the status of gym.
	Source:http://recsvcs.unm.edu/hours/Hours.html 
     */
        //Weekdays	
	if (now.getDay >= 1 && now.getDay <= 5) {
		if (how.getHours() > 6 && now.getHours() < 21 ){
			document.getElementById("gym_status").src = gymState[0];
		}	
	}
	//Sunday and Saturday
	if (now.getDay == 0 || now.getDay == 6) {    
	       if (now.getHours() >= 12 && now.getHours() <= 19) {
		       document.getElementById("gym_status").src = gymState[0];
	       }
	}
	else document.getElementById("gym_status").src = gymState[1];
});
		
