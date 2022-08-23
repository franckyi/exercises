// complete the function
function solution(string) {
    let arr = string.split('');
    let newArr = [string[0]];
    for(let i=1; i<string.length; i++) {
        arr[i].match(/[A-Z]/)?
        newArr[i]=` ${arr[i]}` : newArr[i] = arr[i];
    }
    return newArr.toString().replace(/,/g, '')
}

solution('EdiaFranckyIside');