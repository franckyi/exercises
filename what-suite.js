// function defineSuit(card) {
//     // good luck
//     if(card.indexOf('♣')>0) {return 'clubs'}
//     else if(card.indexOf('♦')>0) {return 'diamonds'}
//     else if(card.indexOf('♥')>0) {return 'hearts'}
//     else if(card.indexOf('♠')>0) {return 'spades'}
//     else console.log('It\'s not a card')
//   }

//   defineSuit('8♣')
//   ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 
    }

// function defineSuit(card) {
//     return {
//       '♣' : 'clubs',
//       '♦' : 'diamonds',
//       '♥' : 'hearts',
//       '♠' : 'spades'
//     }[card.substr(-1)]
//   }

//   defineSuit('6♥')