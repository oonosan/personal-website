const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//Get current time
var date = new Date()
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

//Function to convert time to degrees
let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
//min*(360/60)/12 adds precession to the hour hand
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
//sec*(360/60)/60 adds more precession to the minute hand
let secPosition = sec * 360 / 60;


function runTheClock() {
  secPosition = secPosition + 6;
  /*I grab the current value of sec position then I add the number of degrees
   *necessary to display one additional second. 
   * 360deg/60sec = 6deg/sec
   */
  minPosition = minPosition + (6/60);
  /*The minute arm moves the distance of one second over 60 seconds
   * 360deg/60min= 6deg/min
   * 6deg / 60sec = 0.1deg/sec
  */
  hrPosition = hrPosition + (3/360);
  /* 360deg/12h = 30deg/h 
   * 3,600 seconds in an hour
   * 30deg / 3600s = 1/120deg/sec
  */

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

//setInterval repeatedly calls a function, or executes a code snippet, with a fixed time delay between each call.
var interval = setInterval(runTheClock,1000);
//every 1000ms = 1s
