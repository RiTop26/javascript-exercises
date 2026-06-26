const fibonacci = function(n) {
    let prevNumber1 = 1;
    let prevNumber2 = 1;
    let currentNumber;

    if(n == 0) {
        return 0;
    }
    else if(n < 0){
        return "OOPS";
    }

    else if(n == 1 || n == 2) {
        return 1;
    }

    for (let i = 3; i <= n; i++) {
        currentNumber = prevNumber1 + prevNumber2;
        prevNumber1 = prevNumber2;
        prevNumber2 = currentNumber;
    }
    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
