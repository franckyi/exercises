// function grow(x){
//     let result = 1;
//     for (let i = 0; i < x.length; i++) {
//         result *= x[i] 
//     }
//     console.log(result)
//   }

    // shorter solution
    const grow = x => x.reduce( (a, b) => a + b );


  grow([1,2,3,4])