// function sumOfDifferences(...arr) {
//     // arr.sort();
//     // arr.reverse();
//     arr.sort((a,b)=>b-a)
//     console.log(arr);
//     let sum= 0;
//     for(let i=1; i < arr.length; i++) {
//         sum += (arr[i-1]-arr[i])
//     }
//     if(sum.length === 0 || sum.length === 1) sum = 0;
//     return sum;
//     // console.log(sum)
// }
// sumOfDifferences(5, 2, 10)

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

console.log(Math.max(2,5,23))
console.log(Math.min(2,5,23))