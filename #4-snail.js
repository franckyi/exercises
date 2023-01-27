snail = function(arr) {

  let result = [];

  if (arr.length == 1) {
      console.log(arr[0]);
      return arr[0];
  }

  else {
    while (arr.length > 1) {
      let a = arr[0];
      let b = [];
      arr.forEach( e => b.push(e[e.length-1]) );
      let c = arr[arr.length-1];
      let d = [];
      arr.forEach( e => d.push(e[0]) );

      for (let i = 0; i < a.length-1; i++) {
        result.push(a[i]);
      }
    
      for (let i = 0; i < b.length-1; i++) {
        result.push(b[i]);
      }

      for (let i = c.length-1; i > 0; i--) {
        result.push(c[i]);
      }
    
      for (let i = d.length-1; i > 0; i--) {
        result.push(d[i]);
      }    
      
    
      arr.shift();
      arr.pop();
      arr.forEach( a => a.shift() );
      arr.forEach( a => a.pop() );
      
      if (arr.length == 1) result.push(arr[0][0]);

    }

    // console.log(result);
    return result;
  }

}

snail( [ [ 1, 2, 3 ], [ 6, 9, 8 ], [ 7, 4, 5 ] ] );
// expected [ [ 1, 2, 3 ], [ 6, 9, 8 ], [ 7, 4, 5 ] ] to deeply equal [ 1, 2, 3, 6, 9, 8, 7, 4, 5 ]
// snail( [ [] ] );
// snail( [ [1] ] );
// snail( [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] );

// expected [ [] ] to deeply equal []