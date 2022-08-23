let min = (args) => {
    return Math.min(...args)
}

let max = (args) => {    
    return Math.max(...args)
}

// min (-52, 56, 30, 29, -54, 0, -110)
min(42, 54, 65.2, 87, 1.3)
// max (4,6,2,1,9,63,-134,566)
max(5)

// Short Solution
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);