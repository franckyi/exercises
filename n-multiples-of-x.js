// Create a function with two arguments that will
// return an array of the first (n) multiples of (x). 

function countBy(x, n) {
    let z = [];

    for (let i = 1; i <= n; i++) {
        z.push(i * x)
    }

    return z;
  }
//   console.log(Math.pow(2,3))

  console.log(countBy(2, 5))