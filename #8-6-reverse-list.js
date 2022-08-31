function reverseList(list) {
    let result = [];

    console.log(list.length);
    console.log(list[3]);

    for (let i = list.length - 1; i >= 0; i--) {
        console.log(i)
        console.log(list[i])
        result.push(list[i]);
    }
    console.log(result)
  }

reverseList( [3,1,5,4] )