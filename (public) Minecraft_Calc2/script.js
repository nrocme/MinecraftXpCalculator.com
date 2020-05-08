// returns the amount of xp needed to go from the current experience level to the target experience level using numbers                         located at https://minecraft.gamepedia.com/Experience
function xpNeed(currLevel, targetLevel) {
    var currXp = 0;
    var targetXp = 0;
    var xpNeeded = 0;
    switch (true) {
        case (currLevel <= 16):
            currXp = Math.pow(currLevel, 2) + (6 * currLevel);
            break;
        case (currLevel <= 31):
            currXp = (2.5 * Math.pow(currLevel, 2)) - ((40.5 * currLevel) + 360);
            break;
        case (currLevel > 31): 
            currXp = (4.5 * Math.pow(currLevel, 2)) - ((162.5 * currLevel) + 2220);
            break;
        default:
            alert("value error");
            break;
    }
    switch (true) {
        case (targetLevel <= 16):
            targetXp = Math.pow(targetLevel, 2) + (6 * targetLevel);
            break;
        case (targetLevel <= 31):
            targetXp = (2.5 * Math.pow(targetLevel, 2)) - ((40.5 * targetLevel) + 360);
            break;
        case (targetLevel > 31): 
            targetXp = (4.5 * Math.pow(targetLevel, 2)) - ((162.5 * targetLevel) + 2220);
            break;
        default:
            alert("value error");
            break;
    }
    return targetXp - currXp;
}

    
function calc() {
    var currLevel = document.getElementById("currLevel").value; 
    var targetLevel = document.getElementById("targetLevel").value;
    var targetXp = xpNeed(document.getElementById("currLevel").value, document.getElementById("targetLevel").value);
    
	var five = document.getElementsByClassName('five');
    for (var i = 0; i < five.length; i++) 
        five[i].innerHTML = (targetXp/5).toFixed(0);
		
    var onetotwo = document.getElementsByClassName('onetotwo');
    for (var i = 0; i < onetotwo.length; i++) 
        onetotwo[i].innerHTML = (targetXp/1).toFixed(0) + " to " + (targetXp/2).toFixed(0);
    
    var onetothree = document.getElementsByClassName('onetothree');
    for (var i = 0; i < onetothree.length; i++)
        onetothree[i].innerHTML = (targetXp/1).toFixed(0) + " to " + (targetXp/3).toFixed(0);

	var four = document.getElementsByClassName('four');
    for (var i = 0; i < four.length; i++) 
        four[i].innerHTML = (targetXp/4).toFixed(0);
    
	var twentytwo = document.getElementsByClassName('twentytwo');
    for (var i = 0; i < twentytwo.length; i++) 
        twentytwo[i].innerHTML = (targetXp/22).toFixed(0);
    
	var twenty = document.getElementsByClassName('twenty');
    for (var i = 0; i < twenty.length; i++) 
        twenty[i].innerHTML = (targetXp/20).toFixed(0);
    
	var three = document.getElementsByClassName('three');
		for (var i = 0; i < three.length; i++) 
			three[i].innerHTML =(targetXp/3).toFixed(0);
        
	var two = document.getElementsByClassName('two');
		for (var i = 0; i < two.length; i++) 
			two[i].innerHTML = (targetXp/2).toFixed(0);
        
	var twelve = document.getElementsByClassName('twelve');
		for (var i = 0; i < twelve.length; i++)
			twelve[i].innerHTML = (targetXp/12).toFixed(0);
        
	var ten = document.getElementsByClassName('ten');
		for (var i = 0; i < ten.length; i++) 
			ten[i].innerHTML = (targetXp/10).toFixed(0);
        
	var onetotwo = document.getElementsByClassName('onetotwo');
		for (var i = 0; i < onetotwo.length; i++)
			onetotwo[i].innerHTML = (targetXp/1).toFixed(0) + " to " + (targetXp/2).toFixed(0);
    
	var one = document.getElementsByClassName('one');
		for (var i = 0; i < one.length; i++)
			one[i].innerHTML = (targetXp/1).toFixed(0);
        
    // special case for enderdragon
    if (targetXp < 12000) document.getElementById('enderdragon').innerHTML = "1";
    else document.getElementById('enderdragon').innerHTML = (targetXp/12000).toFixed(0);
    // special case for wither
    if (targetXp < 50) document.getElementById('wither').innerHTML = "1";
    else document.getElementById('wither').innerHTML = (targetXp/50).toFixed(0);

	var threetoseven = document.getElementsByClassName('threetoseven');
        for (var i = 0; i < threetoseven.length; i++)
            threetoseven[i].innerHTML = (targetXp/3).toFixed(0) + " to " + (targetXp/7).toFixed(0);

	var twotofive = document.getElementsByClassName('twotofive');
		for (var i = 0; i < twotofive.length; i++)
			twotofive[i].innerHTML = (targetXp/2).toFixed(0) + " to " + (targetXp/5).toFixed(0);
        
	var onetofive = document.getElementsByClassName('onetofive');
		for (var i = 0; i < onetofive.length; i++)
			onetofive[i].innerHTML = (targetXp/1).toFixed(0) + " to " + (targetXp/5).toFixed(0);
        
	var fifteentofortythree = document.getElementsByClassName('fifteentofortythree');
		for (var i = 0; i < fifteentofortythree.length; i++)
			fifteentofortythree[i].innerHTML = (targetXp/15).toFixed(0) + " to " + (targetXp/43).toFixed(0);
		
	var pointseven = document.getElementsByClassName('pointseven');
		for (var i = 0; i < pointseven.length; i++)
			pointseven[i].innerHTML = (targetXp/0.7).toFixed(0);
        
	var pointthreefive = document.getElementsByClassName('pointthreefive');
		for (var i = 0; i < pointthreefive.length; i++)
			pointthreefive[i].innerHTML = (targetXp/0.35).toFixed(0);
        
	var pointtwo = document.getElementsByClassName('pointtwo');
		for (var i = 0; i < pointthreefive.length; i++)
			pointtwo[i].innerHTML = (targetXp/0.2).toFixed(0);
        
	var pointonefive = document.getElementsByClassName('pointonefive');
		for (var i = 0; i < pointthreefive.length; i++)
			pointonefive[i].innerHTML = (targetXp/0.15).toFixed(0);
        
	var pointone = document.getElementsByClassName('pointone');
		for (var i = 0; i < pointthreefive.length; i++)
			pointone[i].innerHTML = (targetXp/0.1).toFixed(0);
        
	var threetoeleven = document.getElementsByClassName('threetoeleven');
		for (var i = 0; i < threetoeleven.length; i++)
			threetoeleven[i].innerHTML = (targetXp/3).toFixed(0) + " to " + (targetXp/11).toFixed(0);
        
	var threetosix = document.getElementsByClassName('threetosix');
		for (var i = 0; i < threetosix.length; i++)
			threetosix[i].innerHTML = (targetXp/3).toFixed(0) + " to " + (targetXp/6).toFixed(0);
        
	var onetoseven = document.getElementsByClassName('onetoseven');
		for (var i = 0; i < onetoseven.length; i++)
			onetoseven[i].innerHTML = (targetXp/1).toFixed(0) + " to " + (targetXp/7).toFixed(0);
        
	var onetosix = document.getElementsByClassName('onetosix');
		for (var i = 0; i < onetosix.length; i++)
			onetosix[i].innerHTML = (targetXp/1).toFixed(0) + " to " + (targetXp/6).toFixed(0);
        
	var zerototwo = document.getElementsByClassName('zerototwo');
		for (var i = 0; i < zerototwo.length; i++)
			zerototwo[i].innerHTML = (targetXp/0).toFixed(0) + " to " + (targetXp/2).toFixed(0);
        
    
}
