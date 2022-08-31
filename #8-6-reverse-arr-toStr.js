function digitize(n) {
    //code here
    let orderedList = [];
    let numToString = String(n);
    for(let i=0; i<numToString.length; i++) {
        orderedList.unshift(numToString[i])
    }
    console.log(orderedList);
  }

  digitize(742)
  console.log(String(532));

  '532'