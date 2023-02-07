function sudoku(puzzle) {
  //return the solved rows as a 2d array of 9 x 9 

  // create rows as reference
  let rows = puzzle;

  // create cols
  let cols = Array(9);
  let col = [];
  rows.forEach( row => col.push(row[0]) );
  cols[0] = col;
  col = [];
  rows.forEach( row => col.push(row[1]) );
  cols[1] = col;
  col = [];
  rows.forEach( row => col.push(row[2]) );
  cols[2] = col;
  col = [];
  rows.forEach( row => col.push(row[3]) );
  cols[3] = col;
  col = [];
  rows.forEach( row => col.push(row[4]) );
  cols[4] = col;
  col = [];
  rows.forEach( row => col.push(row[5]) );
  cols[5] = col;
  col = [];
  rows.forEach( row => col.push(row[6]) );
  cols[6] = col;
  col = [];
  rows.forEach( row => col.push(row[7]) );
  cols[7] = col;
  col = [];
  rows.forEach( row => col.push(row[8]) );
  cols[8] = col;
  col = [];

  // set rows counters to 0
  let r0Filleds = 0;
  let r1Filleds = 0;
  let r2Filleds = 0;
  let r3Filleds = 0;
  let r4Filleds = 0;
  let r5Filleds = 0;
  let r6Filleds = 0;
  let r7Filleds = 0;
  let r8Filleds = 0;

  // set cols counters to 0
  function countRowsFilled() {
    let c0Filleds = 0;
    let c1Filleds = 0;
    let c2Filleds = 0;
    let c3Filleds = 0;
    let c4Filleds = 0;
    let c5Filleds = 0;
    let c6Filleds = 0;
    let c7Filleds = 0;
    let c8Filleds = 0;
  }

  // count filled rows
  rows[0].map( v => { if (v !== 0) r0Filleds++ } );
  rows[1].map( v => { if (v !== 0) r1Filleds++ } );
  rows[2].map( v => { if (v !== 0) r2Filleds++ } );
  rows[3].map( v => { if (v !== 0) r3Filleds++ } );
  rows[4].map( v => { if (v !== 0) r4Filleds++ } );
  rows[5].map( v => { if (v !== 0) r5Filleds++ } );
  rows[6].map( v => { if (v !== 0) r6Filleds++ } );
  rows[7].map( v => { if (v !== 0) r7Filleds++ } );
  rows[8].map( v => { if (v !== 0) r8Filleds++ } );

  // count filled cols
  function countColsFilled() {
    cols[0].map( v => { if (v !== 0) c0Filleds++ } );
    cols[1].map( v => { if (v !== 0) c1Filleds++ } );
    cols[2].map( v => { if (v !== 0) c2Filleds++ } );
    cols[3].map( v => { if (v !== 0) c3Filleds++ } );
    cols[4].map( v => { if (v !== 0) c4Filleds++ } );
    cols[5].map( v => { if (v !== 0) c5Filleds++ } );
    cols[6].map( v => { if (v !== 0) c6Filleds++ } );
    cols[7].map( v => { if (v !== 0) c7Filleds++ } );
    cols[8].map( v => { if (v !== 0) c8Filleds++ } );
  }

  // create the 9 squares
  console.log(rows);
  console.log(cols);

  let square = [];
  for (let k = 0; k < 3; k++) {
    let threeNums = [];
    for (let i = 0; i < 3; i++) {
      threeNums.push(rows[i][k]);
    }
    console.log(threeNums);
  }
  
    


  
}

var puzzle = [
  /* 0 */ [5,3,0,0,7,0,0,0,0],
  /* 1 */ [6,0,0,1,9,5,0,0,0],
  /* 2 */ [0,9,8,0,0,0,0,6,0],
  /* 3 */ [8,0,0,0,6,0,0,0,3],
  /* 4 */ [4,0,0,8,0,3,0,0,1],
  /* 5 */ [7,0,0,0,2,0,0,0,6],
  /* 6 */ [0,6,0,0,0,0,2,8,0],
  /* 7 */ [0,0,0,4,1,9,0,0,5],
  /* 8 */ [0,0,0,0,8,0,0,7,9]
  /*       0 1 2 3 4 5 6 7 8
  */
];

sudoku(puzzle);

/*
1) DONE CREATE ROWS ALREADY EXIST
2) DONE CREATE COLS
3) DONE CREATE COUNTERS FOR EACH ROW
4) DONE CREATE COUNTERS FOR EACH COL
5) CREATE THE 9 SQUARES
6) FIND ROW WITH MORE FILLED NUMBERS I.E. WITH BIGGEST COUNTER
  a) IF COUNTER >= 8 IS EASY JUST FILL IT!
7) FIND COL WITH MORE FILLED NUMBERS I.E. WITH BIGGEST COUNTER
8) CREATE A LIST OF POSSIBLE SOLUTIONS FOR EACH ROW, COL AND SQUARE
  a) IF LIST OF POSSIBLE <= 1 IS EASY JUST FILL IT !
9) CREATE A LIST OF EXCLUDED SOLUTIONS FOR EACH ROW, COL AND SQUARE

*/