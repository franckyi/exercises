// function century(year) {
//     // Finish this :)
//     let century = (year % 100 < 1) ? Math.floor(year / 100) : ( Math.floor(year / 100) + 1 )
//     return century;
//   }


// Using ceiling method to round up to nearest century (100)
// ceil arrotonda per eccesso
const century = year => Math.ceil(year/100)

console.log(century(1901))