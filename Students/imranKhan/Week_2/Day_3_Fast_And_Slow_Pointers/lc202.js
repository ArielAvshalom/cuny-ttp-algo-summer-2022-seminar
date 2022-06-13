// Problem Statement #

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

function getSum(num)
{
  let total = 0;
  while (num !== 0)
  {
    total += (num % 10) * (num % 10);
    num = parseInt(num / 10);
  }

  return total;
}

const find_happy_number = function(num) {
  let fast = num;
  let slow = num;

  do 
  {
    fast = getSum(getSum(fast));
    slow = getSum(slow);

  } while (fast !== slow)

  return (slow === 1);
};


console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)

