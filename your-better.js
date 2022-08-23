function betterThanAverage(classPoints, yourPoints) {
    const classSum = classPoints.reduce( function(a, b) { return (a + b) } ) + 1;
    const classAverage = classSum / classPoints.length + 1;
    return yourPoints > classAverage ? true : false;
}

console.log(betterThanAverage([2,3], 5))