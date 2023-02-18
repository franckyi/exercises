// function getCount(str) {
//     let vowelsCount = 0;

//     for(let i= 0; i < str.length; i++) {
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//         vowelsCount += 1;
//     }
// }
    
//     return vowelsCount;
//   }

const getCount = str => {
    return ( str.match(/[aeiou]/ig) || [] ).length; // optional ||[] returns empty [] if the search returns null
  }

console.log(getCount('adesso'))