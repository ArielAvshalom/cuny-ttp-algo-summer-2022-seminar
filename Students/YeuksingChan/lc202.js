// Problem Statement #

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits,
// leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

const find_happy_number = function (num) {
  // TODO: Write your code here
  let numString = num.toString(); // convert into a string so i can use loop to get each number
  let sum = 0;
  while (true) {
    [...numString].forEach((el) => (sum += Math.pow(el, 2)));
    if (sum === 1) {
      return true;
    }
    numString = sum.toString();
    sum = 0;
  }
};

console.log(`${find_happy_number(23)}`);
console.log(`${find_happy_number(12)}`);
