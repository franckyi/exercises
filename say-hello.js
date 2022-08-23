// Create a method sayHello/say_hello/SayHello
// that takes as input a name, city, and state to welcome a person.
// Note that name will be an array consisting of one or more values
// that should be joined together with one space between each,
// and the length of the name array in test cases will vary.
let name = []

function spellName() {
    
}

let sayHello = (name, city, state) => {
    console.log(`Hi ${Array.from(name)}, Welcome in ${city}, ${state}!`)
}

sayHello(['Francky', 'Iside'],'Gdynia','Poland')