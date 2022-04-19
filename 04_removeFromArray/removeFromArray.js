

const removeFromArray = function(...args) {
    let array = args[0];
    // now filter the other args from the array
    let filtered = array.filter(value => !args.includes(value))
    return filtered;
}


// Do not edit below this line
module.exports = removeFromArray;
