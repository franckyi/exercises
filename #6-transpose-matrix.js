function transpose(...matrix) {
  
  let items = [];
  let temp = [];
  let result = [];

  console.log(matrix);
  
  // PUSH MATRIX TO TEMP
  matrix.forEach(row => {
    row.forEach( r => { console.log(row); if (r !== undefined) temp.push(r) });  
  })

  // TEMP CONTAINS INITIAL ROWS
  console.log(temp);
  console.log(temp.length);
  
  
  // ACCESS TEMP VALUES
    temp.forEach( t => {
    for (let i = 0; i < t.length; i++) {
      console.log(t[i]);
        items.push(t[i])
      }
    });

  // CHECK IF nRows EQUALS temp[0].length or matrix.length ?
  let nRows = temp[0].length;
  let nCols = temp.length;
  
  temp[0] = temp[0].filter( t => { return t!== undefined } );
  items = items.filter( i => { return i!== undefined } );

  console.log(matrix);
  console.log(temp);
  console.log(nRows);
  console.log(nCols);
  console.log(items);

  if (temp.length > 0 && temp.length < 2) {
    // temp[0].forEach((m, index) => {
      // if (typeof m === 'undefined') { temp[0].pop(temp[0][index]) }
    // })

    let row = [];
    for (let i = 0; i <= nCols; i += nRows) {
      row.push(items[i]);
    }
    result.push(row);
  }
  
  else if (temp.length >= 2) {
    for (let k = 0; k < nRows; k++) {
      let row = [];
      for (let i = 0; i <= nCols; i += nRows) {
        row.push(items[k]);
        row.push(items[k+nRows]);
      }
      // row.forEach( r => { if (r === undefined) row.pop(r) } );
      row = row.filter( r => {return r!== undefined} );
      result.push(row);
    }
  }

  console.log(result);
  return result;

}

transpose( [ [ 1, undefined ] ] );

// expected [ [ 1, undefined ] ] to deeply equal [ [ 1 ] ]
// [ 1, undefined ]
// [ [ 1, undefined, 1, undefined ] ]
// [ 1, 2, 1, 2 ]
// [ ['a','b','c'],['d','e','f'] ]  ==>  [ ['a','d'],['b','e'],['c','f'] ]
// [ [1,2,3],[4,5,6] ]  ==>  [ [1,4],[2,5],[3,6] ]