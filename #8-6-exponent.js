// Your function should multiply the two numbers,
// and then subtract 1 from the exponent.
// Then, it has to print out an expression (like 28x^7).
// "^1" should not be truncated when exponent = 2.

function derive(coefficient,exponent) {
  return coefficient * exponent + 'x^' + (exponent - 1);
}

console.log(derive(5, 9))
// derive(5, 9) --> this should output "45x^8"