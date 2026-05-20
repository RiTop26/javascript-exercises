const reverseString = function(word) {
    let arr = word.split("");
    let wordReverse = arr.reverse();
    
    let newString = wordReverse.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
