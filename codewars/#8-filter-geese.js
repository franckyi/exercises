function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  // USING forEach() and for()
  let result = [];

  birds.forEach( bird => {
    let isContained = false;

    for (let i = 0; i < geese.length; i++) {
      
      if (bird == geese[i]) {
        isContained = true;
        break;
      }
      else isContained = false;
    }
    console.log(isContained);
    console.log(bird);
    
    if (isContained === false) { 
      result.push(bird);
    }

  });
  
  // return an array containing all of the strings in the input array except those that match strings in geese
  console.log(result);
  
  // using filter() and includes()
  // let result = birds.filter( b => !geese.includes(b));
  console.log(result);
  return result;
};

gooseFilter(["African", 'CANE', 'Toulouse', "DIVERSO", "Toulouse", "Pilgrim", "Steinbacher"]);