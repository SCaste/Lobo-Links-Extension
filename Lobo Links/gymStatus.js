/**
 * Function: gymStatus
 * Displays to "gym_status" whether the Johnson Center is open or closed.
 */

window.addEventListener("load",function gymStatus() {
	var gym_state = ["pics\\gymOpen.png",
	       		"pics\\gymClosed.png"];	

	var now = new Date(); 

     /* Tests to see if the day is a weekday or a weekend
	in order to display the status of gym.
	Source:http://recsvcs.unm.edu/hours/Hours.html 
     */
        //Monday-Thursday	
	if (now.getDay() > 0 && now.getDay() < 5) {
		if (now.getHours() >= 6 && now.getHours() < 23 ){
			document.getElementById("gym_status").src = gym_state[0];
		}	
	}
	//Friday
	if (now.getDay() == 5) {
		if (now.getHours() >= 6 && now.getHours() < 22 ){
			document.getElementById("gym_status").src = gym_state[0];
		}	
	}
	//Sunday and Saturday
	else if (now.getDay() == 0 || now.getDay() == 6) {    
	       if (now.getHours() >= 12 && now.getHours() <= 19) {
		       document.getElementById("gym_status").src = gym_state[0];
	       }
	}
	else   document.getElementById("gym_status").src = gym_state[1]; 
});
		
