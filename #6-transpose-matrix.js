function transpose(matrix) {

  let nRows = matrix[0].length;
  let nCols = matrix.length;
  let listOfNums = [];

  // extract numbers
  matrix.forEach(row => {
    row.forEach( r => {
      listOfNums.push(r);
    })  
  })

  console.log(listOfNums);

  // rebuild rows
  for (let i = 0; i < nRows; i + nRows) {
    
  }


}

matrix( [ [1,2,3], [ [4,5,6] ] ] );

/*
- input is an array of matrix rows (array of arrays)
- columns and rows are swapped.
- each row has the same length,
- height and width are positive.

[ [1,2,3],[4,5,6] ]  ==>  [ [1,4],[2,5],[3,6] ]

For example, the transpose of:

| 1 2 3 | // n + nRows
| 4 5 6 |

is

| 1 4 |
| 2 5 |
| 3 6 |

another example

1 2 3 4
5 6 7 8

is

1 5 // n + nRows
2 6
3 7
4 8

*/