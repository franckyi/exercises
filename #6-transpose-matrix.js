function transpose(matrix) {

  const nRows = matrix[0].length;
  const nCols = matrix.length;

  console.log(matrix);
  console.log(matrix[0][0]);
  console.log(matrix.length);
  console.log(nRows);
  console.log(nCols);

  let result = [];
  
  for (let i=0; i<nRows; i++) {
    let row = [];
    
    for (let m=0; m<matrix.length; m++) {
      console.log(matrix[m][i]);
      if (matrix[m][i] !== undefined) { 
        row.push(matrix[m][i]) 
      }
      else continue;
    }
    
    console.log(row);

    result.push(row);
  }


  console.log(result);
  return result;
  
  
}

transpose( [ ['a','c',2],['e',1,'f'] ] );




/*

| 1 2 3 |
| 4 5 6 |


| 1 4 |
| 2 5 |
| 3 6 |

*/

// expected [ [ 1, undefined ] ] to deeply equal [ [ 1 ] ]
// [ 1, undefined ]
// [ [ 1, undefined, 1, undefined ] ]
// [ 1, 2, 1, 2 ]
// [ ['a','b','c'],['d','e','f'] ]  ==>  [ ['a','d'],['b','e'],['c','f'] ]
// [ [1,2,3],[4,5,6] ]  ==>  [ [1,4],[2,5],[3,6] ]