function createTriangle(x) {
    let str = '';
    
    for (let i = 0; str.length < x ; i++) {
        str = str + '#' + '\n'
        console.log(str)
    }
}


createTriangle(7)