const add = function (numb1, numb2) {
  return numb1 + numb2;
};

const subtract = function (numb1, numb2) {
  return numb1 - numb2;
};

const sum = function (array) {
  return array.reduce(function (total, current) {
    return total + current;
  }, 0);
};

const multiply = function (array) {
  return array.reduce(function (a, b) {
    return a * b;
  });
};

const power = function (a, b) {
  return Math.pow(a, b);
};

function factorial(a) {
  if (a == 0) {
    return 1;
  }
  for (var i = a - 1; i >= 1; i--) {
    a *= i;
  }
  return a;
}
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
