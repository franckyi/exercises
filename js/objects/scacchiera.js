let size = 15;
let char = '#';
let row = '';

for (let i = 0; i < size; i++) {
  
  if (i%2 === 0) {
    console.log(row.padEnd(size, `${char} `));
  } 
  else if (i%2 !== 0){
    console.log(row.padEnd(size, ` ${char}`));
  }
  
}