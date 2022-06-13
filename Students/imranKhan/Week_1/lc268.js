// Problem Statement #

// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

const find_missing_number = function(nums) {
  let i = 0;
  while (i < nums.length)
  {
    let j = nums[i];
    if (i !== j && j < nums.length)
      [nums[i], nums[j]] = [nums[j], nums[i]];
    else
      i++;
  }

  for (let i = 0; i < nums.length; i++)
    if (nums[i] != i)
      return i;

  return -1;
};

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));

