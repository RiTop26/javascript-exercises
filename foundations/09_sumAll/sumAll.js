const sumAll = function(a, b) {
    if (a < 0 || b < 0 || a % 1 !== 0 || b % 1 !== 0 || typeof(a) !== "number" || 
    typeof(b) !== "number") {
        return "ERROR";
    }
    let theArr = [a, b]
    let num = theArr.sort();
    let small = num.at(0)
    let large = num.at(1)
    let sum = 0;
    for (let i = small; i <= large; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
