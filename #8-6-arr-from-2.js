// My solution

// const longest = (s1, s2) => {
//     let arr = Array.from(s1.split().concat(s2).join().replace(/,/g, ''))
//     // console.log(arr)
//     let result = []

//         searchDuplicates:
//         for (let i = 0; i < arr.length; i++) {
//             if (result.includes(arr[i])) {
//                 continue searchDuplicates;
//             } else {
//                 result[i] = arr[i] }
//         }
//         return result.toString().replace(/,/g, '').split('').sort().join('')
// }

// Shorter solutions

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// or similar:

// function longest(s1, s2) {
//     console.log(Array.from(new Set(s1 + s2)).join(''))
//   }

    
    longest('ambarra','deqqo') // sampe call

