const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hour");
const timerMinEl = document.querySelector(".timer__min");
const timerSecEl = document.querySelector(".timer__sec");
const startDate = new Date();
const endDate = new Date("Febuary 31, 2022 09:30:00");


function getTimeDifference(start, end) {
    let milliseconds = Math.floor(end - start);
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (minutes * 60);

    return days + " " + hours + " " + minutes + " " + seconds;
}

getTimeDifference()
console.log(getTimeDifference(startDate, endDate));

