// const alternate = (n, firstValue, secondValue) => {
//     let arr = []

//     for (let i = 0; i < n; i++) {
//         arr.push(i % 2 === 0 ? firstValue : secondValue)
//         }

//     return arr
// }

// alternate(3,'a','b')

  function alternate(n, firstValue, secondValue){
    return Array.from( { length : n }, (_, i) => i % 2 === 0 ? firstValue : secondValue );
  }  
  console.log(alternate(3,'a','b'))
