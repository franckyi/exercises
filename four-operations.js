// function basicOp(operation, value1, value2)
// {
//   // Code
// }

// function basicOp(operation, value1, value2)
// {
//   if (operation === '+') {return value1 + value2}
//   else if (operation === '-') {return value1 - value2}
//   else if (operation === '*') {return value1 * value2}
//   else if (operation === '/') {return value1 / value2}
// }

// console.log(basicOp('+',2,1));
// console.log(basicOp('-',2,1));
// console.log(basicOp('*',2,8));
// console.log(basicOp('/',4,2));


function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}

console.log(basicOp('+',3,5));