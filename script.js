//step1 - define some basix variables
let display = document.getElementById("clock");
let dateDisplay = document.querySelector(".date");
//step2 - display the clock
function updateTime(){
let date = new Date();
let hours = formateTime(date.getHours());
let minutes = formateTime(date.getMinutes());
let seconds = formateTime(date.getSeconds());

display.innerHTML = `${hours}:${minutes}:${seconds}`;
dateDisplay.innerHTML = `${date}`;
}

//function for applying 0 before single digit
function formateTime(time) {
  if (time < 10) {
    return  `0${time}`;
  } else {
    return time;
  }
}

//here we use setInterval to update the clock every second
setInterval(updateTime, 1000);

//step3 - set Alarm
//step4 - stop the alarm