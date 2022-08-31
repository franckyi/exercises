function between(a, b) {
    let currInt = a;
    let arr = [a];
    for(let i=0; currInt < b; i++) {
        arr.push(++currInt);
    }
    // console.log(arr);
    return arr
  }

//   between(2,4);