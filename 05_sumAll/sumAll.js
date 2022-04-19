const sumAll = function(numOne, numTwo) {
    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) return "ERROR";
    if (numOne < 0 || numTwo < 0) return "ERROR";
    if (numOne > numTwo) {
        const switcheroo = numOne;
        numOne = numTwo;
        numTwo = switcheroo;
    }
    let sumTotal = 0;
    for (let i = numOne; i < numTwo + 1; i++) {
        sumTotal += i;
    } return sumTotal;
}




// Do not edit below this line
module.exports = sumAll;
