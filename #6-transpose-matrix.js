function transpose(...matrix) {

  let items = [];
  let temp = [];
  let result = [];
  
  matrix.forEach(row => {
    row.forEach( r => {
      if (typeof r !== 'undefined') { temp.push(r) };
    })  
  })
  
  temp.forEach( value => {
    for (let i = 0; i < value.length; i++) {
      console.log(value[i]);
      if (typeof value[i] !== 'undefined') {
        items.push(value[i])
      };
    }
  })

  let nRows = temp[0].length;
  let nCols = temp.length;
  
  matrix
  temp
  nRows
  nCols
  items

  if (temp.length > 0 && temp.length < 2) {
    temp[0].forEach((m, index) => {
      if (typeof m === 'undefined') { temp[0].pop(temp[0][index]) }
    })

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
      row.forEach( r => { if (r == undefined) row.pop(r) } );
      result.push(row);
    }
  }

  result
  return result;

}

transpose( [ [ 1, undefined ] ] );

// expected [ [ 1, undefined ] ] to deeply equal [ [ 1 ] ]
// [ 1, undefined ]
// [ [ 1, undefined, 1, undefined ] ]
// [ 1, 2, 1, 2 ]
// [ ['a','b','c'],['d','e','f'] ]  ==>  [ ['a','d'],['b','e'],['c','f'] ]
// [ [1,2,3],[4,5,6] ]  ==>  [ [1,4],[2,5],[3,6] ]