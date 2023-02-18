const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

let getSum = (a,b) => {
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    let nums = range(min, max, 1)
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum
}

getSum(-1,2)

// Altra soluzione
// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
//   }

// Altre soluzioni https://www.codewars.com/kata/55f2b110f61eb01779000053/solutions/javascript



// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
// const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

// Generate numbers range 0..4
// range(0, 4, 1);
// [0, 1, 2, 3, 4]