const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hour");
const timerMinEl = document.querySelector(".timer__min");
const timerSecEl = document.querySelector(".timer__sec");
const startDate = new Date();
const endDate = new Date("March 16, 2022 01:00:00");

function getTimeDifference(start, end) {
    let millieseconds = Math.floor(end - start);
    let seconds = Math.floor(millieseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    
    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    
    return {
        rDays: days,
        rHours: hours,
        rMinutes: minutes,
        rSeconds: seconds
    }

}

console.log(getTimeDifference(startDate, endDate));

