function transpose(...matrix) {
  let nRows = matrix[0].length;
  let nCols = matrix.length;
  let items = [];
  let result = [];

  matrix
  items
  nRows
  nCols

  matrix.forEach(row => {
    row.forEach( r => {
      items.push(r);
    })  
  })

  if (matrix.length < 2) {
    matrix[0].forEach((item, index) => {
      if (item === undefined) { matrix[0].pop(matrix[0][index]) }
    })

    let row = [];
    for (let i = 0; i <= nCols; i += nRows) {
      row.push(items[i]);
    }
    result.push(row);
  }
  else {
    for (let k = 0; k < nRows; k++) {
      let row = [];
      for (let i = 0; i <= nCols; i += nRows) {
        row.push(items[k]);
        row.push(items[k+nRows]);
      }
      row.forEach( r => { if (r == undefined) row.pop(r) } );
      row
      result.push(row);
    }
  }

  result
  return result;

}

transpose( ['a','b','c'],['d','e','f'] );

// [ 1, undefined ]
// [ [ 1, undefined, 1, undefined ] ]
// [ 1, 2, 1, 2 ]
// [ ['a','b','c'],['d','e','f'] ]  ==>  [ ['a','d'],['b','e'],['c','f'] ]
// [ [1,2,3],[4,5,6] ]  ==>  [ [1,4],[2,5],[3,6] ]