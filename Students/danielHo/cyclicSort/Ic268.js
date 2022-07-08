// Problem Statement #

// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

const find_missing_number = function(nums) {
    // TODO: Write your code here

    // Loop from 0 to nums length
    // Check which value is not included
    // return the value
    for (let i = 0; i < nums.length; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }
    return -1;
  };
  
  console.log(find_missing_number([4, 0, 3, 1]));
  console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));