// const humanYearsCatYearsDogYears = (humanYears) => {
//     switch (humanYears) {
//         case 1:
//             return [1, 15, 15]
//             break;
//         case 2:
//             return [2, 24, 24]
//             break;
//     }

//     if (humanYears >= 3) { 
//         return [ humanYears, 24 + ((humanYears - 2) * 4), 24 + ((humanYears - 2) * 5) ]
//     }

// }

var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }

humanYearsCatYearsDogYears(10)

// expected undefined to deeply equal [ 10, 56, 64 ]