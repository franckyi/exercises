function sudoku(puzzle) {
  //return the solved rows as a 2d array of 9 x 9 

  // create rows
  let rows = puzzle;

  // create cols
  let cols = [];
  for (let i = 0; i <= 8; i++) {
    for (let k = 0; k <= 8; k++) {
      cols.push(rows[i][k]);  
    
    }
  }
  console.log(cols[0]);
  

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
  let c0Filleds = 0;
  let c1Filleds = 0;
  let c2Filleds = 0;
  let c3Filleds = 0;
  let c4Filleds = 0;
  let c5Filleds = 0;
  let c6Filleds = 0;
  let c7Filleds = 0;
  let c8Filleds = 0;

  // count filled nums for each row and col


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
3) CREATE COUNTERS FOR EACH ROW
4) CREATE COUNTERS FOR EACH COL
5) CREATE THE 9 SQUARES
6) FIND ROW WITH MORE FILLED NUMBERS I.E. WITH BIGGEST COUNTER
  a) IF COUNTER >= 8 IS EASY JUST FILL IT!
7) FIND COL WITH MORE FILLED NUMBERS I.E. WITH BIGGEST COUNTER
8) CREATE A LIST OF POSSIBLE SOLUTIONS FOR EACH ROW, COL AND SQUARE
  a) IF LIST OF POSSIBLE <= 1 IS EASY JUST FILL IT !
9) CREATE A LIST OF EXCLUDED SOLUTIONS FOR EACH ROW, COL AND SQUARE

*/