const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sumUp = 0;
	for(let i = 0; i < arr.length; i++) {
    sumUp += arr[i];
  }
  return sumUp;
};

const multiply = function(arr) {
  let product = 1;
  for(let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(factorialCompute) {
  let myFactorial = 1;
	if(factorialCompute == 0 || factorialCompute == 1) {
    return 1;
  }
  else {
    for(let i = 1; i <= factorialCompute; i++) {
      myFactorial *= i;
    }
    return myFactorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
