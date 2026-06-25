const palindromes = function (str) {
    // Remove non-letter and non-number
    const myStr = str.replace(/[^a-zA-Z0-9]/g, "");

    // Convert myStr to lowercase
    const theStrs = myStr.toLowerCase();

    // Split theStrs 
    let arr = theStrs.split("");

    // Reverse arr
    let strReverse = arr.reverse();

    // Join strReverse
    let newString = strReverse.join("");

    // check if newString and theStrs are palindromes
    if(theStrs == newString) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
