function transpose(...matrix) {
  let nRows = matrix[0].length;
  let nCols = matrix.length;
  let items = [];
  let result = [];

  matrix

  matrix.forEach(row => {
    row.forEach( r => {
      items.push(r);
    })  
  })
  
  nRows
  nCols

  for (let k = 0; k < nRows; k++) {
    let row = [];
    for (let i = 0; i <= nCols; i += nRows) {
      row.push(items[k]);
      row.push(items[k+nRows]);
    }
    row
    result.push(row);
  }

  result
  return result;

}

transpose( [ 1, 2, 1, 2 ] );

// [ ['a','b','c'],['d','e','f'] ]  ==>  [ [a,d],[b,e],[c,f] ]
// [ [1,2,3],[4,5,6] ]  ==>  [ [1,4],[2,5],[3,6] ]