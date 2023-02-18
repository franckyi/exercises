function oddOrEven(array) {
    //enter code here
    let sum = 0;
    
   if(array.length == 0) {array.push(0)}
   else {
        for (let i=0; i < array.length; i++) {
            sum += array[i]
        }
   }

    if (sum % 2 == 0) {
        return even
    }
    else return odd;
}

 oddOrEven([-1,0,3]);