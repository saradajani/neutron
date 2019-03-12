a = document.getElementById("one");
b = document.getElementById("two");
c = document.getElementById("three");
d = document.getElementById("four");
var mySound = document.getElementById('mysound');
var mySoundd = document.getElementById('mysoundd');
var mySounddd = document.getElementById('mysounddd');
e = document.getElementById("win");
f = document.getElementById("lost");



function nextImage(el){
	if (el.src.match("images/onekey.png")){
		el.src="images/twokey.png";
	} else if (el.src.match("images/twokey.png")){
		el.src="images/threekey.png";
	} else if (el.src.match("images/threekey.png")){
		el.src="images/keyfour.png";
	} else if (el.src.match("images/keyfour.png")){
		el.src="images/fivekey.png";
	} else if (el.src.match("images/fivekey.png")){
		el.src="images/sixkey.png";
	} else if (el.src.match("images/sixkey.png")){
		el.src="images/sevenkey.png";
	} else if (el.src.match("images/sevenkey.png")){
		el.src="images/eight.png";
	} else if (el.src.match("images/eight.png")){
		el.src="images/nine.png";
	} else if (el.src.match("images/nine.png")){
		el.src="images/zero.png";
	} else if (el.src.match("images/zero.png")){
		el.src="images/onekey.png";
	}
}

function checkButton(){
	if (a.src.match("images/sevenkey.png") && b.src.match("images/threekey.png") && c.src.match("images/fivekey.png")&& d.src.match("images/eight.png")){
	a.classList.add("opaque");
	b.classList.add("opaque");
	c.classList.add("opaque");
	d.classList.add("opaque");
	e.classList.remove("hidethis");
	mysound.play();
	document.getElementById("rocket").src="images/rocket.png";
    
	} else{
	
		//i wish this function would work when all lights are yellow, or all are red...
	}
}

var timeLeft = 30;

	var elem = document.getElementById("demo");
	var timerId = setInterval(countdown, 1000);

	function countdown() {
		if (timeLeft == 0) {
			clearTimeout(timerId);
			f.classList.remove("hidethis");		
			mysoundd.play();

		}else {
			elem.innerHTML = timeLeft;
			timeLeft--;
		}
	}


