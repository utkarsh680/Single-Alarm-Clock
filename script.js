//step1 - define some basix variables
let display = document.getElementById("clock");
let dateDisplay = document.querySelector(".date");
const audio = new Audio('/assets/music.mp3');
let dateAndTimeDisplay = document.getElementById('datetime');
let set_alarm = document.getElementById('start');
let Main_box = document.querySelector('.outer-div');
audio.loop = true;
let alarmTime = null;
let alarmTimeOut = null;
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
function setAlarmTime(value){
      alarmTime = value;
    if (alarmTime === value){
        setAlarm();
        set_alarm.style.backgroundColor = 'rgb(190, 243, 252)';
    }
}

function setAlarm(){
    dateAndTimeDisplay.style.display = 'block';
    const currentTime = new Date();
    const setupTime = new Date(alarmTime);
    if(setupTime > currentTime){
        const timeToAlarm = setupTime.getTime() - currentTime.getTime();
        alarmTimeOut = setTimeout(function() {
            audio.play(); //this is play function of audio object
        }, timeToAlarm);
    }
}
//step4 - stop the alarm

function clearAlarm(){
    set_alarm.style.backgroundColor = '#e3edf7';
    dateAndTimeDisplay.style.display = 'none';
    audio.pause();
    if(alarmTimeOut){
        clearTimeout(alarmTimeOut); //this is clear function of timeout object
    }
}