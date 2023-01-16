function transpose(...matrix) {

  let nRows = matrix[0].length;
  let nCols = matrix.length;
  let items = [];
  let result = [];

  matrix.forEach(row => {
    row.forEach( r => {
      items.push(r);
    })  
  })

  items.forEach( (item, index) => {
    let row = [];

    for (let i = index; i < items.length; i + nRows) {
      if (item[i] !== undefined) {
        row.push(item[i]);
      };
    }

    result.push(row);
  })



  console.log(result)

}

transpose( [ [1,2,3], [ [4,5,6] ] ] );

// [ [a,b,c],[d,e,f] ]  ==>  [ [a,d],[b,e],[c,f] ]




// [ [1,2,3],[4,5,6] ]  ==>  [ [1,4],[2,5],[3,6] ]



/*
- input is an array of matrix rows (array of arrays)
- columns and rows are swapped.
- each row has the same length,
- height and width are positive.

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