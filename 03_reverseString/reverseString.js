const reverseString = function(word) {
    //convert input to string
    let string = word.toString();
    // create an array that holds all the characters
    // of the input string 
    let arrayOfStringCharacters = string.split("");
    // reverse the characters in the array
    let reverseArray = arrayOfStringCharacters.reverse();
    // turn the array back into a string
    let finalString = reverseArray.join("");
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
