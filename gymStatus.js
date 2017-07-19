document.addEventListener("click",function gymStatus() {
	var gymState = ["open",
	       		"closed"];
	var now = new Date(); 

	if (now.getHours() > 9) {
		document.getElementById("gym_status").innerHTML = gymState[0];
	}
	else document.getElementById("gym_status").innerHTML = gymState[1];
});
		
