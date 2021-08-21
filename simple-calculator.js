// Variable could be assigned using var, const, and let.
// However, one should strive to use const as a default and let only when one thinks that the assigned value need to be changed.
// As a result, var should not be used.
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

// Getting age information from a user and depending on a given data, it will print out a different message.
const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number!");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("Good luck with your life!");
} else if (age > 50 && age <= 80) {
  console.log("Planning to retire?");
} else if (age === 100) {
  console.log("You lived a century!");
} else {
  console.log("Thank you for being a great person throughout your life.");
}

// || = or && = and
// true || true == true
// false || true == true
// true || false == true
// false || false == false

// true && true == true
// false && true == false
// true && false == false
// false && false == false
