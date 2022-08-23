// const toAlternatingCase = str => {
//     // let newStr = str.replace( /[a-z]/g, function(x) { return x.toUpperCase() } )
//     // .replace( /[A-Z]/g, function(y) {return y.toLowerCase()} );

//     let newStr = str

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase) {
//             newStr[i] = str[i].toLowerCase
//         }
//         else if (str[i] === str[i].toLowerCase) {
//             newStr[i] = str[i].toUpperCase
//         }
//     }

//     console.log(newStr)
//   }

// toAlternatingCase('CaeB')




String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

let str = 'aDeSSo'
console.log(str.toAlternatingCase())