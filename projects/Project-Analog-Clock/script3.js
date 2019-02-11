const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
  var date = new Date()
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

  //Function to convert time to degree
  let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
  //min*(360/60)/12 adds precession to the hour hand
  let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
  //sec*(360/60)/60 adds more precession to the minute hand
  let secPosition = sec * 360 / 60;


  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

//WindowOrWorkerGlobalScope.setInterval()
//setInterval repeatedly calls a function, or executes a code snippet, with a fixed time delay between each call.
var interval = setInterval(runTheClock,1000);
//every 1000ms = 1s
