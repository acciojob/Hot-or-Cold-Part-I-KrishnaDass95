//your code here
var btn = document.getElementById("btn");
var displayRandomNumber = document.getElementById("num");
var guessedNumber = document.getElementById("guess");


function generateRandomNumber(){
	// Math.random gives a decimal value, we use the floor value to remove the 
	var num = Math.floor(Math.random() * 41) - 20;
	displayRandomNumber.textContent = num;
}
btn.addEventListener("click", generateRandomNumber);

