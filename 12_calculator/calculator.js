const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((result, current) => result + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((result, current) => result * current);
};

const power = function (a, b) {
  let result = a;
  for (let i = 2; i <= b; i++) {
    result *= a;
  }
  return result;
};

// BETTER USE Math.pow()
// const power = function (a, b) {
//   return Math.pow(a, b);
// };

const factorial = function (num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
