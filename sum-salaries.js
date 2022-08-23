let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (let prop in salaries) { 
  console.log(`salaries[prop]= ${salaries[prop]}`)
  sum += salaries[prop]
  console.log(`sum= ${sum}`)
}

console.log(sum)