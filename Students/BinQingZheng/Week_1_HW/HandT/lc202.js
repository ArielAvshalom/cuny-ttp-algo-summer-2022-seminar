// Problem Statement #

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. 
//All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

//Function to return the sum of square of all of a number's digits 
const num_square_sum = function (n){
  let squareSum = 0;
  let digit = 0;
  while (n !== 0){
    digit = n % 10;
    squareSum += digit ** 2;
    n = Math.floor(n/10);
  }
  return squareSum;
}

const find_happy_number = function(num) {
  //1 is a happy number.
  if (num === 1) 
    return true;

  let slow = num;
  let fast = num;
  do {
    //move slow number by one iterations
    slow = num_square_sum (slow);
    //move fast number by two iterations
    fast = num_square_sum(num_square_sum(fast))
  } while (slow !== fast);

  //  if both slow and fast  meet at 1, then return true
  return (slow === 1);
};
  
console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(19)}`)
console.log(`${find_happy_number(12)}`)
console.log(`${find_happy_number(7)}`)
console.log(`${find_happy_number(20)}`)

//Time complexity = O(n*logn)
//Space complexity O(1)
