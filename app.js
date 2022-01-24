const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hour");
const timerMinEl = document.querySelector(".timer__min");
const timerSecEl = document.querySelector(".timer__sec");

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

let timer = setInterval(function () {
    const startDate = new Date();
    const endDate = new Date("Januray 26, 2022 11:00:00");

    let timeDifferenceObj = getTimeDifference(startDate, endDate);
    timerDayEl.textContent = timeDifferenceObj.rDays;
    timerHourEl.textContent = timeDifferenceObj.rHours;
    timerMinEl.textContent = timeDifferenceObj.rMinutes;
    timerSecEl.textContent = timeDifferenceObj.rSeconds;


    if (timeDifferenceObj.rDays.toString().length < 2) {
        timerDayEl.textContent = "0" + timeDifferenceObj.rDays
    }
    if (timeDifferenceObj.rHours.toString().length < 2) {
        timerHourEl.textContent = "0" + timeDifferenceObj.rHours
    }
    if (timeDifferenceObj.rMinutes.toString().length < 2) {
        timerMinEl.textContent = "0" + timeDifferenceObj.rMinutes
    }
    if (timeDifferenceObj.rSeconds.toString().length < 2) {
        timerSecEl.textContent = "0" + timeDifferenceObj.rSeconds
    }

    if (timeDifferenceObj.rDays === 0 && timeDifferenceObj.rHours === 0 && timeDifferenceObj.rMinutes === 0 && timeDifferenceObj.rSeconds === 0) {
        clearInterval(timer);
    } else if (timeDifferenceObj.rDays < 0) {
        timerDayEl.textContent = "00"
        timerHourEl.textContent = "00"
        timerMinEl.textContent = "00"
        timerSecEl.textContent = "00"
    }

}, 1000);
