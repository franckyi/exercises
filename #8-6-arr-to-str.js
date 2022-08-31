function smash (words) {
    return words.toString().replace(/,/g,' ')
    // shorter solution
    // return words.join(" ");
 };

 smash(['aldo','giovanni','giacomo'])