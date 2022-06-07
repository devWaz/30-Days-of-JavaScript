const secondsHand = document.querySelector('.seconds-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function theTime(){
    let timeNow = new Date(); //get the date from the system

    let seconds = timeNow.getSeconds(); //get seconds from the timeNow variable
    let secondDegrees = (seconds / 60) * 360; //converts the time to degrees
    secondsHand.style.transform = `rotate(${secondDegrees}deg)`;

    let minutes = timeNow.getMinutes();
    let minuteDegrees = (minutes / 60) * 360 + ((seconds/60)*6) +90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    let hours = timeNow.getHours();
    let hourDegrees = (hours / 60) * 360 + ((minutes/60)*30) +90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;  
}

setInterval(theTime , 1000);