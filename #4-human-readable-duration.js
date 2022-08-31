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
    Time.seconds = seconds;
    while (Time.seconds >= oneMinute) {
        Time.minutes = Math.floor(Time.seconds / oneMinute);
        Time.seconds = Time.seconds % oneMinute;
    }
    if (Time.minutes > 0) {
        Time.minutes > 1 ?
        Time.minutes = Time.minutes + ' minutes' : Time.minutes = Time.minutes + ' minute';
    } else delete Time.minutes;
    seconds = Time.seconds;
}

const calculateSeconds = () => {
    if (Time.seconds > 0) {
        Time.seconds > 1 ?
        Time.seconds = Time.seconds + ' seconds' : Time.seconds = Time.seconds + ' second'; 
    } else {
        delete Time.seconds;
    }
}

function formatDuration (seconds) {
    if (seconds == 0) return 'now';
    Time.seconds = seconds;
    calculateYears();
    calculateDays();
    calculateHours();
    calculateMinutes(seconds);
    calculateSeconds(seconds);

    let length = Object.keys(Time).length;
    let lastValue = Object.values(Time).length;
    lastValue
    if (length > 1) {
        for (let k in Time) {   
            if ( Time[k].value != 0 ) {
                if (Time[k].value == Object.values(Time[k]).length) { 
                    console.log('uguale')
                    // Time[k].value = Time[k].value + 'and ' + Time[k].value;
                }
            } else { delete Time[k] }
        }
    } 
    return Object.values(Time).join(', ').replace(/,\s[a]/g, ' a');
}

console.log(formatDuration(128))

// Test.assertEquals(formatDuration(1), "1 second");
// Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
// Test.assertEquals(formatDuration(120), "2 minutes");
// Test.assertEquals(formatDuration(3600), "1 hour");
// Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds")