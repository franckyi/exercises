function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let sumOfSheeps= 0;
    for(let i=0; i<arrayOfSheep.length; i++) {
        if(Boolean(arrayOfSheep[i]) === true) {
            sumOfSheeps += 1;
        }
    }
    console.log(arrayOfSheep.filter(Boolean).length)
  }

  countSheeps(['aldo', 'carletto', 'pingu', 'neto', '', undefined, null, 0, 4, 'fegatino'])

//   function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
//   }