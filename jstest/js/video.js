var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

var vid = document.getElementById("player1");

function playVid() {
    vid.play();
	document.getElementById('volume').innerHTML = vid.volume*100+"%";
	console.log("Play Video");
}

function pauseVid() {
    vid.pause();
	console.log("Pause Video");
}

function slowDown() {
    vid.playbackRate = vid.playbackRate*0.95;
	console.log("New speed is "+vid.playbackRate);
}

function speedUp() {
	vid.playbackRate = vid.playbackRate*100/95;
	console.log("New speed is "+vid.playbackRate);
}

function skipAhead() {
	console.log("Original location "+ vid.currentTime);
	vid.currentTime = vid.currentTime + 15;
	if (vid.currentTime >= vid.duration){
		vid.currentTime = 0;}
	console.log("New location "+ vid.currentTime);
}

function mute() {
	if (vid.muted){
		vid.muted = false;
		document.getElementById('mute').innerHTML = "Mute";
	}
	else {
		vid.muted = true;
		document.getElementById('mute').innerHTML = "Unmute";
	}
}

function volumeControl(val) {
	vid.volume = val/100;
	document.getElementById('volume').innerHTML = vid.volume*100+"%";
}

function oldSchool() {
	var element = document.getElementById("player1");
	element.classList.add("oldSchool");
}

function original() {
	var element = document.getElementById("player1");
	element.classList.remove("oldSchool");
}