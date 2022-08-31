// Array.sort( (a, b) => (a - b) ) ) ordina un array di numeri correttamente
// ...new Set(Array) crea un nuovo array senza duplicati

function mergeArrays(arr1, arr2) {
    arr1 = [...new Set(arr1.sort( (a, b) => (a - b) ))];
    arr2 = [...new Set(arr2.sort( (a, b) => (a - b) ))];
    let result = [...new Set(arr1.concat(arr2).sort( (a, b) => (a - b) ))];
    return result;
}

console.log(mergeArrays([1,3,5,7,9,11,12],
    [1,2,3,4,5,10,12] ))