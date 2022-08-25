const oneYear = 31536000;
const oneDay = 86400;
const oneHour = 3600;
const oneMinute = 60;
let Time = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
}

const calculateYears = (seconds) => {
        while (seconds >= oneYear) {
            Time.years = Math.floor((seconds / oneDay) / 365);
            seconds = seconds - (Time.years * oneYear);
        }
        if (Time.years != 0) {
            Time.years > 1 ?
            Time.years = Time.years + ' years' : Time.years = Time.years + ' year';
        }
        else delete Time.years;
}

const calculateDays = (seconds) => {
        while (seconds >= oneDay) {
            Time.days = Math.floor(seconds / oneDay);
            seconds = seconds - (Time.days * oneDay);
        }
        if (Time.days != 0) {
            Time.days > 1 ?
            Time.days = Time.days + ' days' : Time.days = Time.days + ' day';
        } else delete Time.days;
}

const calculateHours = (seconds) => {
    while (seconds >= oneHour) {
        Time.hours = Math.floor(seconds / oneHour);
        seconds = seconds - (Time.hours * oneHour);
    }
    if (Time.hours != 0) {
        Time.hours > 1 ?
        Time.hours = Time.hours + ' hours' : Time.hours = Time.hours + ' hour';
    } else delete Time.hours;
}

const calculateMinutes = (seconds) => {
    while (seconds >= oneMinute) {
        Time.minutes = Math.floor(seconds / oneMinute);
        seconds = seconds % oneMinute;
    }
    if (Time.minutes != 0) {
        Time.minutes > 1 ?
        Time.minutes = Time.minutes + ' minutes' : Time.minutes = Time.minutes + ' minute';
    } else delete Time.minutes;
}

const calculateSeconds = (seconds) => {
    if (seconds != 0) {
        seconds > 1 ?
        seconds = seconds + ' seconds' : seconds = seconds + ' second'; 
    } else delete Time.seconds 
    return seconds;
}

function formatDuration (seconds) {
    if (seconds == 0) return 'now';
    calculateYears(seconds);
    calculateDays(seconds);
    calculateHours(seconds);
    calculateMinutes(seconds);
    calculateSeconds(seconds);

    let length = Object.keys(Time).length;
    if (length > 1) {
        for (let k in Time) {         
            if ( Time[k] == Object.values(Time)[length-1] ) {
                Time[k] = 'and ' + Time[k];
            } 
        }
    }
    let FormattedTime = Object.values(Time).join(', ').replace(/,\s[a]/g, ' a');
    return FormattedTime;
}

console.log(formatDuration(120))

// Test.assertEquals(formatDuration(1), "1 second");
// Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
// Test.assertEquals(formatDuration(120), "2 minutes");
// Test.assertEquals(formatDuration(3600), "1 hour");
// Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds")