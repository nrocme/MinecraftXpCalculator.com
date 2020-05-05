function xpNeed() {
curr = document.getElementById("curr").value; 
target = document.getElementById("target").value;
tarXp=0;
currXp=0;
expNeed=0;
    if (curr <= 16) {
     currXp = (curr * curr) + (6 * curr);
	 }
	if (curr > 16 && curr <= 31) {
	 currXp = (2.5 * (curr * curr)) - (40.5 * curr) + 360;
	}
	if (curr >= 32) {
	currXp = (4.5 * (curr * curr)) - (162.5 * curr) + 2220;
	}
	
	 if (target <= 16) {
     tarXp = (target * target) + (6*target);
	 }
	if (target > 16 && curr <= 31) {
	 tarXp =(2.5 * (target * target)) - (40.5 * target) + 360;
	}
	if (target >= 32) {
	tarXp = (4.5 * (target * target)) - (162.5 * target) + 2220;
	}
	expNeed = tarXp - currXp;
}

function calc(curr, target) {
 curr = document.getElementById("curr").value; 
 target = document.getElementById("target").value;
  xpNeed();
	var five = document.getElementsByClassName('five');
		for (var i = 0; i < five.length; i++) {
			five[i].innerHTML = (expNeed/5).toFixed(0);
		}
		
	var oneTo3 = document.getElementsByClassName('oneTo3');
		for (var i = 0; i < oneTo3.length; i++) {
			oneTo3[i].innerHTML = (expNeed/1).toFixed(0)  + " to " + (expNeed/3).toFixed(0);
		}
		
	var four = document.getElementsByClassName('four');
		for (var i = 0; i < four.length; i++) {
			four[i].innerHTML = (expNeed/4).toFixed(0);
		}
	var three = document.getElementsByClassName('three');
		for (var i = 0; i < three.length; i++) {
			three[i].innerHTML =(expNeed/3).toFixed(0);
		}
	var two = document.getElementsByClassName('two');
		for (var i = 0; i < two.length; i++) {
			two[i].innerHTML = (expNeed/2).toFixed(0);
		}
	var twelve = document.getElementsByClassName('twelve');
		for (var i = 0; i < twelve.length; i++) {
			twelve[i].innerHTML = (expNeed/12).toFixed(0);
		}
	var ten = document.getElementsByClassName('ten');
		for (var i = 0; i < ten.length; i++) {
			ten[i].innerHTML = (expNeed/12).toFixed(0);
		}
	var enderDragon = document.getElementsByClassName('enderDragon');
		for (var i = 0; i < enderDragon.length; i++) {
		if (expNeed < 12000) enderDragon[i].innerHTML = "1";
		else enderDragon[i].innerHTML = (expNeed/12000).toFixed(0);
		}
	var oneTo2 = document.getElementsByClassName('oneTo2');
		for (var i = 0; i < oneTo2.length; i++) {
			oneTo2[i].innerHTML = (expNeed/1).toFixed(0) + " to " + (expNeed/2).toFixed(0);
		}
	var one = document.getElementsByClassName('one');
		for (var i = 0; i < one.length; i++) {
			one[i].innerHTML = (expNeed/1).toFixed(0);
		}
		
	var fifty = document.getElementsByClassName('fifty');
		for (var i = 0; i < fifty.length; i++) {
			fifty[i].innerHTML = (expNeed/50).toFixed(0);
		}
	var threeTo7 = document.getElementsByClassName('threeTo7');
		for (var i = 0; i < threeTo7.length; i++) {
			threeTo7[i].innerHTML = (expNeed/3).toFixed(0) + " to " + (expNeed/7).toFixed(0);
		}
	var twoTo5 = document.getElementsByClassName('twoTo5');
		for (var i = 0; i < twoTo5.length; i++) {
			twoTo5[i].innerHTML = (expNeed/2).toFixed(0) + " to " + (expNeed/5).toFixed(0);
		}
	var oneTo5 = document.getElementsByClassName('oneTo5');
		for (var i = 0; i < oneTo5.length; i++) {
			oneTo5[i].innerHTML = (expNeed/1).toFixed(0) + " to " + (expNeed/5).toFixed(0);
		}
	var fifteenTo43 = document.getElementsByClassName('fifteenTo43');
		for (var i = 0; i < fifteenTo43.length; i++) {
			fifteenTo43[i].innerHTML = (expNeed/15).toFixed(0) + " to " + (expNeed/43).toFixed(0);
		}
	var zero7 = document.getElementsByClassName('zero7');
		for (var i = 0; i < zero7.length; i++) {
			zero7[i].innerHTML = (expNeed/0.7).toFixed(0);
		}
	var zero35 = document.getElementsByClassName('zero35');
		for (var i = 0; i < zero35.length; i++) {
			zero35[i].innerHTML = (expNeed/0.7).toFixed(0);
		}
	var threeTo11 = document.getElementsByClassName('threeTo11');
		for (var i = 0; i < threeTo11.length; i++) {
			threeTo11[i].innerHTML = (expNeed/3).toFixed(0) + " to " + (expNeed/11).toFixed(0);
		}
	var threeTo6 = document.getElementsByClassName('threeTo6');
		for (var i = 0; i < threeTo6.length; i++) {
			threeTo6[i].innerHTML = (expNeed/3).toFixed(0) + " to " + (expNeed/6).toFixed(0);
		}
	var oneTo7 = document.getElementsByClassName('oneTo7');
		for (var i = 0; i < oneTo7.length; i++) {
			oneTo7[i].innerHTML = (expNeed/1).toFixed(0) + " to " + (expNeed/7).toFixed(0);
		}
	var oneTo6 = document.getElementsByClassName('oneTo6');
		for (var i = 0; i < oneTo6.length; i++) {
			oneTo6[i].innerHTML = (expNeed/1).toFixed(0) + " to " + (expNeed/6).toFixed(0);
		}
}
