/** 
 * Function: finalsButton
 * Adds an onlick action to the finals button image, which opens a link
 * to the current finals schedule.
 */
function finalsButton() {

	window.open("https://schedule.unm.edu/final-exams/final_exam/fall-2017-final-exam-schedule.pdf");
}
	document.getElementById("open_finals").onclick = finalsButton;    
