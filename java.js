a = document.getElementById("one");
b = document.getElementById("two");
c = document.getElementById("three");
d = document.getElementById("four");
var mySound = document.getElementById('mysound');
var mySoundd = document.getElementById('mysoundd');
var mySounddd = document.getElementById('mysounddd');
e = document.getElementById("win");
f = document.getElementById("lost");


//This function switches one image to the next image. If Image one is #1, then change that image to #2. If the image is #2, then change the image to #3. These buttons shuffle through 1-0.
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

//This function makes sure that the images are aligned in a certain sequence. If the variables have images that are aligned in the correct order (as shown below) #7, #3, #5, #8, then the
//variables will become opaque/red, a winning button will appear, and a 'liftoff' sound will begin. The image for the main rocket will change as well, to a rocket that is 'taking off'.
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
	
	}
}


//This function sets a countdown for a total of 30 seconds, as each second goes by there is a decrease by one second in the current second(s). When this function is = to 0, 
//the interval will stop, a button will appear saying you lost, and an alert sound appears as well. 

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


