const add = function (a, b) {
  return (result = a + b);
};

const subtract = function (a, b) {
  return (result = a - b);
};

const sum = function (arr) {
  let result = 0;
  for (let num in arr) {
    result += arr[num];
  }
  return result;
};

const multiply = function (arr) {
  return (result = arr.reduce((prev, num) => prev * num));
};

const power = function (a, b) {
  let result = a;
  for (let i = 2; i <= b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
