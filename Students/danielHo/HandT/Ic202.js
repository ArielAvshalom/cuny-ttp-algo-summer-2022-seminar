// Problem Statement #

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

const find_happy_number = function(num) {
    // TODO: Write your code here
    let set = new Set();

    // Loop until num is equal to 1, then return true
    // Call sumOfDigitSquare function with num
    // If num does not exists in the set, then add it into the set
    // If nset has the value num in the set, endless loop detected, then return false
    while (num !== 1) {
        num = sumOfDigitSquare(num)
        if (set.has(num)) { 
            return false;
        }
        set.add(num)
    }
    return true;
};

// return the sum of each digit squared in num
function sumOfDigitSquare(num) {
    let sum = 0;
    num = num.toString();

    for (let i = 0; i < num.length; i++) {
        sum += Math.pow(parseInt(num[i]), 2);
    }
    return sum;
}

// 23
// 2^2 + 3^2 = 4 + 9 = 13
// 13
// 1^2 + 3^2 = 1 + 9 = 10
// 10
// 1^2 + 0^2 = 1 => return true

// 12
// 1^2 + 2^2 = 5 => return false
  
  
console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)