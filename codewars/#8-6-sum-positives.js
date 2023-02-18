// Sum Numbers
function positiveSum(arr) {
    let result = 0;
    let i = 0;
    for(i=0; i < arr.length; i++) {
        if(arr[i]>0) {result += arr[i]}
    }
    return result;
};

sum([1,2,3]);