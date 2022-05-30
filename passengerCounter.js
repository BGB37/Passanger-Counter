
var heading = document.getElementById("heading");
var count = 0;
var minimum = "You can not have negative passengers .";
var maximum = "Your bus can only fit 20 people .";

function increment() {
	if (heading.innerHTML < 20){
		heading.style.color = "white";
		heading.style.fontSize = "150px";
		count = count + 1;
		heading.innerHTML = count;
} 
	else if(heading.innerHTML == minimum){
		heading.style.color = "white";
		heading.style.fontSize = "150px";
		heading.innerHTML = count;
}
	else {
		heading.style.letterSpacing = "2px";
		heading.style.color = "#222";
		heading.style.fontSize = "100px";
		heading.innerHTML = maximum;
		
		
	}
}

function decrement() {
	if(heading.innerHTML > 0) {
		heading.style.color = "white";
		heading.style.fontSize = "150px";
		count = count - 1;
		heading.innerHTML = count;
	} 
	else if(heading.innerHTML == maximum){
		heading.style.color = "white";
		heading.style.fontSize = "150px";
		heading.innerHTML = count;
	} 
	else {
		heading.style.fontSize = "100px";
		heading.style.color = "#222";
		heading.style.letterSpacing = "2px";
		heading.innerHTML = minimum;
	}
}






