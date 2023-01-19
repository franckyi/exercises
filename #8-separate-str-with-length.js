function separate(str) {
  // let temp = str.split(/\s/);
  // console.log(temp);
  return str.split(/\s/).map( r => r + ' ' + r.length );
  // console.log(temp);
  // console.log(result);

}

separate('Mi chiamo Francky')