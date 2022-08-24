const oneYear = 31536000;
const oneDay = 86400;
const oneHour = 3600;
const oneMinute = 60;
const singleYearUnit = ' year';
const moreYearsUnit = ' years';
const singleDayUnit = ' day';
const moreDaysUnit = ' days';
const singleHourUnit = ' hour';
const moreHoursUnit = ' hours';
const singleMinuteUnit = ' minute';
const moreMinutesUnit = ' minutes';
const singleSecondUnit = ' second';
const moreSecondsUnit = ' seconds';
let FormattedTime = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    left: 0,
}

const calculateYears = (seconds) => {
        while (seconds >= oneYear) {
            FormattedTime.years = Math.floor((seconds / oneDay) / 365);
            seconds = seconds - (FormattedTime.years * oneYear);
        }
        FormattedTime.years != 0 ? FormattedTime.years > 1 ? FormattedTime.years = FormattedTime.years + moreYearsUnit : FormattedTime.years = FormattedTime.years + singleYearUnit : delete FormattedTime.years;
        if (FormattedTime.years > 0) return FormattedTime.years;
}

const calculateDays = (seconds) => {
        while (seconds >= oneDay) {
            FormattedTime.days = Math.floor(seconds / oneDay);
            seconds = seconds - (FormattedTime.days * oneDay);
        }
        FormattedTime.days != 0 ? FormattedTime.days > 1 ? FormattedTime.days = FormattedTime.days + moreDaysUnit : FormattedTime.days = FormattedTime.days + singleDayUnit : delete FormattedTime.days;
        if (FormattedTime.days > 0) return FormattedTime.days;
}

const calculateHours = (seconds) => {
    while (seconds >= oneHour) {
        FormattedTime.hours = Math.floor(seconds / oneHour);
        seconds = seconds - (FormattedTime.hours * oneHour);
    }
    FormattedTime.hours != 0 ? FormattedTime.hours > 1 ? FormattedTime.hours = FormattedTime.hours + moreHoursUnit : FormattedTime.hours = FormattedTime.hours + singleHourUnit : delete FormattedTime.hours;
    if (FormattedTime.hours > 0) return FormattedTime.hours;
}

const calculateMinutes = (seconds) => {
    while (seconds >= oneMinute) {
        FormattedTime.minutes = Math.floor(seconds / oneMinute);
        seconds = seconds - (FormattedTime.minutes * oneMinute);
    }
    FormattedTime.minutes != 0 ? FormattedTime.minutes > 1 ? FormattedTime.minutes = FormattedTime.minutes + moreMinutesUnit : FormattedTime.minutes = FormattedTime.minutes + singleMinuteUnit : delete FormattedTime.minutes;
    if (FormattedTime.minutes > 0) return FormattedTime.minutes;
}

function formatDuration (seconds) {
    if (seconds == 0) return 'now';
    calculateYears();
    calculateDays();
    calculateHours();
    calculateMinutes();
    calculateSeconds();

    
    FormattedTime.left = seconds;
    FormattedTime.left != 0 ? FormattedTime.left > 1 ? FormattedTime.left = FormattedTime.left + moreSecondsUnit : FormattedTime.left = FormattedTime.left + singleSecondUnit : delete FormattedTime.left;

    let length = Object.keys(FormattedTime).length;
    if (length > 1) {
        for (let k in FormattedTime) {         
            if ( FormattedTime[k] == Object.values(FormattedTime)[length-1] ) {
                FormattedTime[k] = 'and ' + FormattedTime[k];
            } 
        }
    }

    let result = Object.values(FormattedTime).join(', ').replace(/,\s[a]/g, ' a');
    return result;

}

console.log(formatDuration(62))

// Test.assertEquals(formatDuration(1), "1 second");
// Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
// Test.assertEquals(formatDuration(120), "2 minutes");
// Test.assertEquals(formatDuration(3600), "1 hour");
// Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds")