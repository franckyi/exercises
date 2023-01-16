function transpose(...matrix) {
  matrix

  let nRows = matrix[0].length;
  let nCols = matrix.length;
  let items = [];
  let result = [];

  matrix.forEach(row => {
    row.forEach( r => {
      items.push(r);
    })  
  })

  items.forEach( function (item, index) {
    let row = [];

    for (let i = index; i < items.length; i + nRows) {
      if (item[i] !== undefined) {
        row.push(item[i]);
      };

    }

    result.push(row);
  })

  result
  return result;

}

transpose( [ [1,2,3], [4,5,6] ] );

// [ [a,b,c],[d,e,f] ]  ==>  [ [a,d],[b,e],[c,f] ]
// [ [1,2,3],[4,5,6] ]  ==>  [ [1,4],[2,5],[3,6] ]