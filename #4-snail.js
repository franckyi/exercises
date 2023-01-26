snail = function(arr) {
  // enjoy
  // console.log(array.length);

  let temp = [];
  let result = Array(arr.length);

  while (arr.length > 1 && arr[0].length > 1) {
    let a = arr[0];
    let b = [];
    arr.forEach( e => b.push(e[e.length-1]) );
    let c = arr[arr.length-1];
    let d = [];
    arr.forEach( e => d.push(e[0]) );

    for(let i = 0; i <= a.length-2; i++) {
      temp.push(a[i]);
    }

    for(let i = 0; i <= b.length-2; i++) {
      temp.push(b[i]);
    }

    for(let i = c.length-1; i = 1; i--) {
      temp.push(c[i]);
    }

    for(let i = d.length-1; i = 1; i--) {
      temp.push(d[i]);
    }    

  }

  if (arr.length == 1) temp.push(arr[0]);

  let ti = 0;
  result.forEach( r => {
    for(let i = 0; i < r.length; i++) {
      r[i] = temp[ti];
      ti++
    }
  });

  console.log(result);
  return result;

}

snail( [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] )