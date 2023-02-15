//your code here
var btn = document.getElementById("btn");
var displayRandomNumber = document.getElementById("num");

function generateRandomNumber(){
	var num = Math.floor((Math.random() * 41) - 20);
	displayRandomNumber.textContent = num;
}
btn.addEventListener("click", generateRandomNumber);

