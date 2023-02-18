const p1Won = 'Player 1 won!'
const p2Won = 'Player 2 won!'
const draw = 'Draw!'

const rps = (p1, p2) => {
    if (p1 === p2) return draw;

    if (p1 === 'scissors' && p2 === 'paper') return p1Won; 
    if (p1 === 'paper' && p2 === 'rock') return p1Won; 
    if (p1 === 'rock' && p2 === 'scissors') return p1Won; 
    else return p2Won;
}

// Soluzione con oggetto contenente regole

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//     if (p2 === rules[p1]) {
//       return "Player 1 won!";
//     }
//     else {
//       return "Player 2 won!";
//     }
//   };