var button = document.getElementById("btn");
var randomNum = document.getElementById("num");
var input = document.getElementById("guess").value;
var res = document.getElementById("respond");

function check(rand, input){
	var diff = Number(rand) - Number(input);
	if(Math.abs(diff) <= 5){
		res.textContent = "Hot";
	}
	else{
		res.textContent = "Cold";
	}
	
}

function generateRandomNumber(){
	var rand = Math.floor(Math.random() * 41) - 20;
	randomNum.textContent = rand;
	check(rand, input);
}

btn.addEventListener('click', generateRandomNumber);
