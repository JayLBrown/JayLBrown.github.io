var video;


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	volume = document.querySelector("#volume");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML= video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Decreasing playback speed"); 
	video.playbackRate -= .05;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Increasing playback speed");
	video.playbackRate += .05
});

document.querySelector("#skip").addEventListener("click", function(){
	if(video.currentTime <= (video.duration - 15)){
		video.currentTime += 15;
	}
	else{
		video.currentTime = 0;
		video.play();
		console.log("Play Video");
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted==false) {
		video.muted=true
		console.log("Muted");
		document.querySelector("#mute").innerHTML="Unmute"
	}

	else {
		video.muted=false
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML="Mute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume = this.value/100
	document.getElementById("volume").innerHTML= video.volume*100 + '%';
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS style");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Reverting style");
	video.classList.remove("oldSchool");
});

// document.querySelectorAll(",#orig #vintage").addEventListener("click", function() {
// 	console.log("Changing CSS style");
// 	video.classList.add("oldSchool");
// });



// var i = setInterval(function() {
// 	if(video.readyState > 0) {
// 		var minutes = parseInt(video.duration / 60, 10);
// 		var seconds = video.duration % 60;

// 		// (Put the minutes and seconds in the display)

// 		clearInterval(i);
// 	}
// }, 200);
