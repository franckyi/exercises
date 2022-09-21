function formatDuration (seconds) {
  // Complete this function
    const ONE_YEAR = 31536000;
    const ONE_DAY = 86400;
    const ONE_HOUR = 3600;
    const ONE_MINUTE = 60;
    let formattedResult;
    let Time = {
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    }

    if(seconds == 0) return 'now';
    else {
        Time['seconds'] = seconds;
        function calculateYears() {
            while (Time.seconds >= ONE_YEAR) {
                Time.years = Math.floor((Time.seconds / ONE_DAY) / 365);
                Time.seconds = Time.seconds - (Time.years * ONE_YEAR);
            }
            if (Time['years'] <= 0) { delete Time['years']; }
            else { Time['years'] == 1 ? Time.years += ' year' : Time.years += ' years'; }
        }

        function calculateDays() {
            while (Time.seconds >= ONE_DAY) {
                Time.days = Math.floor(Time.seconds / ONE_DAY);
                Time.seconds = Time.seconds - (Time.days * ONE_DAY);
            }
            if (Time['days'] <= 0) { delete Time['days']; }
            else { Time.days == 1 ? Time.days += ' day' : Time.days += ' days'; }
        }

        function calculateHours() {
            while (Time.seconds >= ONE_HOUR) {
                Time.hours = Math.floor(Time.seconds / ONE_HOUR);
                Time.seconds = Time.seconds - (Time.hours * ONE_HOUR);
            }
            if (Time.hours <= 0) { delete Time.hours }
            else { Time.hours == 1 ? Time.hours += ' hour' : Time.hours += ' hours'; }
        }

        function calculateMinutes() {
            while (Time.seconds >= ONE_MINUTE) {
                Time.minutes = Math.floor(Time.seconds / ONE_MINUTE);
                Time.seconds = Time.seconds - (Time.minutes * ONE_MINUTE);
            }
            if (Time.minutes <= 0) { delete Time.minutes }
            else { Time.minutes == 1 ? Time.minutes += ' minute' : Time.minutes += ' minutes'; }
        }

        function calculateSeconds() {
            if (Time.seconds <= 0) { delete Time.seconds }
            else { Time.seconds == 1 ? Time.seconds += ' second' : Time.seconds += ' seconds'; }
        }

        function cleanResult() {
            formattedResult = Object.values(Time).join(', ');
            const lastCommaIndex = formattedResult.lastIndexOf(',');
            const lastValue = formattedResult.substring(lastCommaIndex, formattedResult.length).replace(/\,/g, ' and');
            formattedResult = formattedResult.substring(0,lastCommaIndex) + lastValue;
        }
      
            calculateYears();
            calculateDays();
            calculateHours();
            calculateMinutes();
            calculateSeconds();
            cleanResult();
            return formattedResult;
    }
  
}

console.log(formatDuration(62));