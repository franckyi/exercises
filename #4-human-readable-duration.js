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
let formattedTime;

const calculateYears = (seconds) => {
    Time.seconds = seconds;
        while (Time.seconds >= oneYear) {
            Time.years = Math.floor((Time.seconds / oneDay) / 365);
            Time.seconds = seconds - (Time.years * oneYear);
        }
        if (Time.years != 0) {
            Time.years > 1 ?
            Time.years = Time.years + ' years' : Time.years = Time.years + ' year';
        } else delete Time.years;
        seconds = Time.seconds;
    }

const calculateDays = (seconds) => {
    Time.seconds = seconds;
        while (seconds >= oneDay) {
            Time.days = Math.floor(Time.seconds / oneDay);
            Time.seconds = seconds - (Time.days * oneDay);
        }
        if (Time.days != 0) {
            Time.days > 1 ?
            Time.days = Time.days + ' days' : Time.days = Time.days + ' day';
        } else delete Time.days;
        seconds = Time.seconds;
}
// todo: change 60 minutes to 1 hour
const calculateHours = (seconds) => {
    Time.seconds = seconds;
    while (Time.seconds >= oneHour) {
        Time.hours = Math.floor(Time.seconds / oneHour);
        Time.seconds = seconds - (Time.hours * oneHour);
            console.log('qui');
    }
    console.log(Time.hours);
    console.log(Time.seconds);

    if (Time.hours != 0) {
        Time.hours > 1 ?
        Time.hours = Time.hours + ' hours' : Time.hours = Time.hours + ' hour';
    // } else delete Time.hours;
    }     

    seconds = Time.seconds;
}

const calculateMinutes = (seconds) => {
    Time.seconds = seconds;
    while (Time.seconds >= oneMinute) {
        Time.minutes = Math.floor(Time.seconds / oneMinute);
        Time.seconds = seconds - (Time.minutes * oneMinute);
    }
    console.log(Time.minutes)
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
    } else delete Time.seconds;
}

const formatResult = () => {
    formattedTime = Object.values(Time).join(', ');
    const lastCommaIndex = formattedTime.lastIndexOf(', ');
    const lastValue = formattedTime.substring(lastCommaIndex, formattedTime.length).replace(/\,/g, ' and ');
    formattedTime = formattedTime.substring(0,lastCommaIndex) + lastValue;
}

function formatDuration (seconds) {
    if (seconds == 0) return 'now';
    Time.seconds = seconds;
    calculateYears();
    calculateDays();
    calculateHours();
    calculateMinutes(seconds);
    calculateSeconds(seconds);
    formatResult();
    return formattedTime;
}
console.log(formatDuration(3600))

// Test.assertEquals(formatDuration(1), "1 second");
// Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
// Test.assertEquals(formatDuration(120), "2 minutes");
// Test.assertEquals(formatDuration(3600), "1 hour");
// Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds")