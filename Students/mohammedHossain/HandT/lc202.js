// Problem Statement #

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

const find_happy_number = function (num) {
  let slow = num;
  let fast = num;
  do {
    slow = sumOfSquaresofDigits(slow);
    fast = sumOfSquaresofDigits(sumOfSquaresofDigits(fast));
  } while (slow !== fast);
  return slow === 1;
};

function sumOfSquaresofDigits(num) {
  let sum = 0;
  while (num > 0) {
    // i.e. 1234 % 10 === 4, get the last digit and square it, add to sum
    sum += Math.pow(num % 10, 2);
    // i.e. 1234 /= 10 === 123, remove last digit
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(`${find_happy_number(23)}`);
console.log(`${find_happy_number(12)}`);
