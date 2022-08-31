// Sum Numbers
function sum (numbers) {
    "use strict";
    let result = 0;
    let i = 0;
    for(i=0; i < numbers.length; i++) {
        result += numbers[i]
    }
    return result;
};

sum([1,2,3]);