const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  times: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

console.log(calculator.add(1, 3));
console.log(calculator.minus(1, 3));
console.log(calculator.divide(1, 3));
console.log(calculator.times(1, 3));
console.log(calculator.power(2, 4));

const addExample = calculator.add(21, 34);
console.log(addExample);
