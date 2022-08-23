function multiplier(factor) {
    return variabile => variabile * factor;
}

let twice = multiplier(2);
console.log(twice(5));

// come fa il 5 ad entrare dentro multiplier?