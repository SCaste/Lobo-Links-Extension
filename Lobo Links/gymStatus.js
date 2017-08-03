window.addEventListener("load",function gymStatus() {
	var gymState = ["pics\\gymOpen.png",
	       		"pics\\gymClosed.png"];
	var now = new Date(); 

	if (now.getHours() > 9) {
		document.getElementById("gym_status").src = gymState[0];
	}
	else document.getElementById("gym_status").src = gymState[1];
});
		
