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
  let r0Filled = 0;
  let r1Filled = 0;
  let r2Filled = 0;
  let r3Filled = 0;
  let r4Filled = 0;
  let r5Filled = 0;
  let r6Filled = 0;
  let r7Filled = 0;
  let r8Filled = 0;

  // set cols counters to 0
  let c0Filled = 0;
  let c1Filled = 0;
  let c2Filled = 0;
  let c3Filled = 0;
  let c4Filled = 0;
  let c5Filled = 0;
  let c6Filled = 0;
  let c7Filled = 0;
  let c8Filled = 0;

  
  // count filled rows and collect values
  let row0Nums = [];
  let row1Nums = [];
  let row2Nums = [];
  let row3Nums = [];
  let row4Nums = [];
  let row5Nums = [];
  let row6Nums = [];
  let row7Nums = [];
  let row8Nums = [];

  rows[0].map( v => {
    if (v !== 0) {
      r0Filled++;
      row0Nums.push(v);
    }
  });
  
  rows[1].map( v => {
    if (v !== 0) {
      r1Filled++;
      row1Nums.push(v);
    }
  });
  
  rows[2].map( v => {
    if (v !== 0) {
      r2Filled++;
      row2Nums.push(v);
    }
  });
  
  rows[3].map( v => {
    if (v !== 0) {
      r3Filled++;
      row3Nums.push(v);
    }
  });
  
  rows[4].map( v => {
    if (v !== 0) {
      r4Filled++;
      row4Nums.push(v);
    }
  });
  
  rows[5].map( v => {
    if (v !== 0) {
      r5Filled++;
      row5Nums.push(v);
    }
  });
  
  rows[6].map( v => {
    if (v !== 0) {
      r6Filled++;
      row6Nums.push(v);
    }
  });
  
  rows[7].map( v => {
    if (v !== 0) {
      r7Filled++;
      row7Nums.push(v);
    }
  });
  
  rows[8].map( v => {
    if (v !== 0) {
      r8Filled++;
      row8Nums.push(v);
    }
  });

  // PREVIEW FILLED ROWS
  console.log(row0Nums);
  console.log(row1Nums);
  console.log(row2Nums);
  console.log(row3Nums);
  console.log(row4Nums);
  console.log(row5Nums);
  console.log(row6Nums);
  console.log(row7Nums);
  console.log(row8Nums);

  // collect rows possible solutions
  let row0Possibilities = [];
  let row1Possibilities = [];
  let row2Possibilities = [];
  let row3Possibilities = [];
  let row4Possibilities = [];
  let row5Possibilities = [];
  let row6Possibilities = [];
  let row7Possibilities = [];
  let row8Possibilities = [];

  // count filled cols and collect values
  let col0Nums = [];
  let col1Nums = [];
  let col2Nums = [];
  let col3Nums = [];
  let col4Nums = [];
  let col5Nums = [];
  let col6Nums = [];
  let col7Nums = [];
  let col8Nums = [];

  cols[0].map( v => {
    if (v !== 0) {
      c0Filled++;
      col0Nums.push(v);
    }
  });

  cols[1].map( v => {
    if (v !== 0) {
      c1Filled++;
      col1Nums.push(v);
    }
  });

  cols[2].map( v => {
    if (v !== 0) {
      c2Filled++;
      col2Nums.push(v);
    }
  });
  cols[3].map( v => {
    if (v !== 0) {
      c3Filled++;
      col3Nums.push(v);
    }
  });
  cols[4].map( v => {
    if (v !== 0) {
      c4Filled++;
      col4Nums.push(v);
    }
  });
  cols[5].map( v => {
    if (v !== 0) {
      c5Filled++;
      col5Nums.push(v);
    }
  });
  cols[6].map( v => {
    if (v !== 0) {
      c6Filled++;
      col6Nums.push(v);
    }
  });
  cols[7].map( v => {
    if (v !== 0) {
      c7Filled++;
      col7Nums.push(v);
    }
  });
  cols[8].map( v => {
    if (v !== 0) {
      c8Filled++;
      col8Nums.push(v);
    }
  });

  // PREVIEW FILLED COLS
  console.log(col0Nums);
  console.log(col1Nums);
  console.log(col2Nums);
  console.log(col3Nums);
  console.log(col4Nums);
  console.log(col5Nums);
  console.log(col6Nums);
  console.log(col7Nums);
  console.log(col8Nums);

  // collect cols possible solutions
  let col0Possibilities = [];
  let col1Possibilities = [];
  let col2Possibilities = [];
  let col3Possibilities = [];
  let col4Possibilities = [];
  let col5Possibilities = [];
  let col6Possibilities = [];
  let col7Possibilities = [];
  let col8Possibilities = [];

  // collect values from rows
  // rows[0].filter( v => { if (v !== 0) r0Filled++ } );
  // rows[1].filter( v => { if (v !== 0) r1Filled++ } );
  // rows[2].filter( v => { if (v !== 0) r2Filled++ } );
  // rows[3].filter( v => { if (v !== 0) r3Filled++ } );
  // rows[4].filter( v => { if (v !== 0) r4Filled++ } );
  // rows[5].filter( v => { if (v !== 0) r5Filled++ } );
  // rows[6].filter( v => { if (v !== 0) r6Filled++ } );
  // rows[7].filter( v => { if (v !== 0) r7Filled++ } );
  // rows[8].filter( v => { if (v !== 0) r8Filled++ } );

  // count filled cols
  function countColsFilled() {
    cols[0].map( v => { if (v !== 0) c0Filled++ } );
    cols[1].map( v => { if (v !== 0) c1Filled++ } );
    cols[2].map( v => { if (v !== 0) c2Filled++ } );
    cols[3].map( v => { if (v !== 0) c3Filled++ } );
    cols[4].map( v => { if (v !== 0) c4Filled++ } );
    cols[5].map( v => { if (v !== 0) c5Filled++ } );
    cols[6].map( v => { if (v !== 0) c6Filled++ } );
    cols[7].map( v => { if (v !== 0) c7Filled++ } );
    cols[8].map( v => { if (v !== 0) c8Filled++ } );
  }

  // create the 9 squares
  let square1 = [];
  for (let k = 0; k < 3; k++) {
    let threeNums = [];
    for (let i = 0; i < 3; i++) {
      threeNums.push(rows[i][k]);
    }
    threeNums.forEach( v => square1.push(v) );
    console.log(threeNums);
  }
  console.log(square1);
  
  let square2 = [];
  for (let e = 3; e < 6; e++) {
    let threeNums = [];
    for (let i = 0; i < 3; i++) {
      threeNums.push(rows[i][e]);
    }
    threeNums.forEach( v => square2.push(v) );
    console.log(threeNums);
  }
  console.log(square2);

  let square3 = [];
  for (let e = 6; e <= 8; e++) {
    let threeNums = [];
    for (let i = 0; i < 3; i++) {
      threeNums.push(rows[i][e]);
    }
    threeNums.forEach( v => square3.push(v) );
    console.log(threeNums);
  }
  console.log(square3);

  let square4 = [];
  for (let e = 0; e < 3; e++) {
    let threeNums = [];
    for (let i = 3; i < 6; i++) {
      threeNums.push(rows[i][e]);
    }
    threeNums.forEach( v => square4.push(v) );
    console.log(threeNums);
  }
  console.log(square4);

  let square5 = [];
  for (let e = 3; e < 6; e++) {
    let threeNums = [];
    for (let i = 3; i < 6; i++) {
      threeNums.push(rows[i][e]);
    }
    threeNums.forEach( v => square5.push(v) );
    console.log(threeNums);
  }
  console.log(square5);

  let square6 = [];
  for (let e = 6; e <= 8; e++) {
    let threeNums = [];
    for (let i = 3; i < 6; i++) {
      threeNums.push(rows[i][e]);
    }
    threeNums.forEach( v => square6.push(v) );
    console.log(threeNums);
  }
  console.log(square6);

  let square7 = [];
  for (let e = 3; e < 6; e++) {
    let threeNums = [];
    for (let i = 6; i <= 8; i++) {
      threeNums.push(rows[i][e]);
    }
    threeNums.forEach( v => square7.push(v) );
    console.log(threeNums);
  }
  console.log(square7);

  let square8 = [];
  for (let e = 3; e < 6; e++) {
    let threeNums = [];
    for (let i = 6; i <= 8; i++) {
      threeNums.push(rows[i][e]);
    }
    threeNums.forEach( v => square8.push(v) );
    console.log(threeNums);
  }
  console.log(square8);
  
  // PREVIEW
  console.log(rows);
  console.log(cols);

  // create list of possible solutions for each row
  // let row0Excluded = rows[0].filter( v => v !==  );
  
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
5) DONE CREATE THE 9 SQUARES
8) CREATE A LIST OF POSSIBLE SOLUTIONS FOR EACH ROW
8) CREATE A LIST OF POSSIBLE SOLUTIONS FOR EACH COL
8) CREATE A LIST OF POSSIBLE SOLUTIONS FOR EACH SQUARE
9) CREATE A LIST OF EXCLUDED SOLUTIONS FOR EACH ROW
9) CREATE A LIST OF EXCLUDED SOLUTIONS FOR EACH COL
9) CREATE A LIST OF EXCLUDED SOLUTIONS FOR EACH SQUARE
6) FIND ROW WITH MORE FILLED NUMBERS I.E. WITH BIGGEST COUNTER
  a) IF COUNTER >= 8 IS EASY JUST FILL LAST!
7) FIND COL WITH MORE FILLED NUMBERS I.E. WITH BIGGEST COUNTER
  a) IF LIST OF POSSIBLE <= 1 IS EASY JUST FILL IT !

*/