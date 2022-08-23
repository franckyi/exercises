// [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
//     console.log(previousValue + currentValue);
//   });

let arr = [2,3,5];
console.log(arr.reduce( function(a, b) { return (a + b) / arr.length } ) );