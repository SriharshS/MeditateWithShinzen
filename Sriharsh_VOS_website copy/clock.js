window.addEventListener("DOMContentLoaded", checkTime());

// play audio with audio icon
// Below are all global declarations
var ZenAudio = document.getElementById("myZenAudio");
var icon = document.getElementById("icon");
let audio = new Audio()
audio.src = "https://res.cloudinary.com/meditatewithshinzen/video/upload/v1661340162/Rain2_qk63vy.mp3"

icon.onclick = function(){
  if (ZenAudio.paused){
	  ZenAudio.play();
	  icon.src = "https://res.cloudinary.com/meditatewithshinzen/image/upload/v1661340061/pause_ony0nh.svg";
  }else{	  ZenAudio.pause();
	  icon.src = "https://res.cloudinary.com/meditatewithshinzen/image/upload/v1661340061/play_tee5hk.svg";
  }
}

// Now lets get the button 
let button = document.getElementById("icon-rain")
background:("rgba(255,255,255,0.5)")

button.addEventListener('click',function(){
	// console.log("Jayant has clicked the button")
	if(audio.paused){
		audio.play()
	} else {
		audio.pause()
	}
})

function checkTime() {
    // I define my time ranges
    let morningTime = moment("09:00", "hh:mm").valueOf();
    let afternoonTime = moment("17:00", "hh:mm").valueOf();
    let eveningTime = moment("21:00", "hh:mm").valueOf();
    let timeRightNow = moment().valueOf();

	// if time right now is greater than morning time and less than afternoon time then stay else move to next
    if (timeRightNow > morningTime && timeRightNow < afternoonTime) {
        console.log(
            "Time right now is between 9 in the morning and 6 in the evening"
        );
        // You would want to do something
    } else if (timeRightNow > afternoonTime && timeRightNow < eveningTime) {
        console.log(
            "The time right now is between 6 in the evening and 9 in the evening"
        );
        let body = document.body;
        body.style.backgroundImage =
        "url(https://res.cloudinary.com/meditatewithshinzen/image/upload/v1660977904/Meditationnight_o7gln4.png)";

        // You would want to do something else
    } else {
        console.log(
            "This time lies between 9 in the evening and 9 in the morning next day"
        );
        let body = document.body;
        body.style.backgroundImage =
            "url(https://res.cloudinary.com/meditatewithshinzen/image/upload/v1660977906/Meditationrain_jlez5e.gif)";
        // You would want to do something else
    }
}

// Navbar stuff 
let navInfo = document.getElementById("nav-info")

navInfo.addEventListener('click',function(){
	// You can do anything you want inside this function
	Swal.fire({title:"This Page Was Designed By Faguni Singh and Sriharsh Sharma for The Void Of Sound Project at SACAC.  About the Teacher - Shinzen Young is an American mindfulness teacher and neuroscience research consultant. His systematic approach is categorizing, adapting and teaching meditation known as Unified Mindfulnes, has resulted in collaborations with Harvard Medical School,Carnegie-Mellon University and the University of Vermont in the bourgeoning field of contemplative neuroscience.Shinzen leads residential retreats throughout North America. In 2022 Siharsh created this web-based mini-retreat, designed to make deep meditation practice accessible to anyone in the world regardless of their location, health situation, and time or financial constraints.",
           background:"rgba(255,255,255,0.5)" 
    })
})
let navConnect = document.getElementById("connect")

navConnect.addEventListener('click',function(){
    // You can do anything you want inside this function
   Swal.fire({title:"Please Write To Us at Sriharshsharma@gmail.com",
       background:"rgba(255,255,255,0.5)"
})
})
