function reverseWords(str) {
    let arr = str.split(' ');
    console.log(arr);
    let revArr = [];
  
  	for (let i = 0; i < arr.length; i++) {
      
    	for (let c = arr.length - 1; c = 0; c--) {
        revArr[i][c].push(arr[i][c])
        console.log(revArr[i][c])
      }
      
    }
  console.log(`'revArr : ' ${revArr}`)
}

reverseWords('La nebbia agli irti colli')