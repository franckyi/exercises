snail = function(arr) {

  console.log(arr.length);
  let length = arr.length;
  console.log(length);

  let temp = [];
  let result = new Array(length);

  for (let i = 0; i < length; i++) {
    result[i] = new Array(arr[0].length);
    // temp.shift();
    // console.log(temp);
  }
  console.log(result);


  while (arr.length > 1) {
    let a = arr[0];
    let b = [];
    arr.forEach( e => b.push(e[e.length-1]) );
    let c = arr[arr.length-1];
    let d = [];
    arr.forEach( e => d.push(e[0]) );
    
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

    for(let i = 0; i < a.length-1; i++) {
      temp.push(a[i]);
    }
    console.log(temp);
  
    for(let i = 0; i < b.length-1; i++) {
      temp.push(b[i]);
    }
    console.log(temp);

    for(let i = c.length-1; i > 0; i--) {
      temp.push(c[i]);
    }
    console.log(temp);
  
    for(let i = d.length-1; i > 0; i--) {
      temp.push(d[i]);
    }    
    
    console.log(temp);
    console.log(arr);
    
    arr.shift();
    console.log(arr);
    arr.pop();
    console.log(arr);
    arr.forEach( a => a.shift() );
    console.log(arr);
    arr.forEach( a => a.pop() );
    console.log(arr);
    
    console.log(arr);
    console.log(arr[0]);

    if (arr.length == 1) temp.push(arr[0][0]);
    console.log(temp);

  }

  console.log(temp);
  console.log(result);

  // TODO VERIFICARE PERCHE NON FUNZIONA
  let k = 0; 
  result.forEach( r => {
    console.log(r);

    for (let i = 0; i < r.length; i++, k++) {
      console.log(temp[k]);
      r = temp[k];
    }

  });

  console.log(result); // PERCHE E' VUOTO?

  
  
  
  // let ti = 0;
  // for (let i = 0; i < length; i++) {
  //   let row = [];
  //   console.log(temp[i]);
  //   row.push(temp[i]);
  //   console.log(row);
  // }

  //  result.forEach( (r, i) => {
  //   // console.log(r);
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log('test');
  //     r.push(temp[ti]);
  //     ti++
  //   }
  //   ti++
  // });
  
  
  return result;

}

snail( [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] );