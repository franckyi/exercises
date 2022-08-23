// function digitize(n) {
//     //code here
//     let orderedList = [];
//     for(let i=0; i<n.toString().length; i++) {
//         orderedList.unshift(Number(n.toString()[i]))
//     }
//     return orderedList
//   }


function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }

//   digitize(123)

// let n =  742;
//  console.log(n.toString().length)