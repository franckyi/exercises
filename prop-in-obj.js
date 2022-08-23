let dog = {
    name: 'Bingo',
    age: 3,
}

const isEmpty = (obj) => {      // same as function isEmpty(obj) {}

    for (let prop in obj) {
            console.log('nope, object is not empty');
            return  // escape the function
    }
    
    console.log('yes, objecj is empty')
}

isEmpty(dog)
