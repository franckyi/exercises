function accum(s) {
    let lowers = s.toLowerCase()
    let capitals = s.toUpperCase()
    capitals = capitals.split('')

    for (let i = 1; i < capitals.length; i++) {

        let l = 0;
        do {
            capitals[i] = capitals[i].concat(lowers[i])
            l++;
        } while (l < i)
        
    }
    
    return capitals.join('-');
}

accum("cwAt")