snail = function(arr) {

  console.log(arr.length);

  let temp = [];
  let result = Array(arr.length);

  while (arr.length > 1) {
    let a = arr[0];
    console.log(a);

    let b = [];
    arr.forEach( e => b.push(e[e.length-1]) );
    console.log(b);

    let c = arr[arr.length-1];
    console.log(c);

    let d = [];
    arr.forEach( e => d.push(e[0]) );
    console.log(d);

    for(let i = 0; i < a.length-1; i++) {
      temp.push(a[i]);
    }
    // console.log(temp);
  
    for(let i = 0; i < b.length-1; i++) {
      temp.push(b[i]);
    }
    // console.log(temp);

    for(let i = c.length-1; i > 0; i--) {
      temp.push(c[i]);
    }
    // console.log(temp);
  
    for(let i = d.length-1; i > 0; i--) {
      temp.push(d[i]);
    }    
    console.log(temp);

    arr.shift();
    arr.pop();
    arr.forEach( e => arr.unshift(e[0]) );
    arr.forEach( e => arr.pop(e[e.length-1]) );

    console.log(arr);

  }

  console.log(temp);

  // if (arr.length == 1) temp.push(arr[0]);

  // let ti = 0;
  // result.forEach( r => {
  //   for(let i = 0; i < r.length; i++) {
  //     r[i] = temp[ti];
  //     ti++
  //   }
  // });

  // console.log(result);
  // return result;

}

snail( [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] );