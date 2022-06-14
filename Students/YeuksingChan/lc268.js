// Problem Statement #

// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’.
// Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

const find_missing_number = function (nums) {
  if (nums.length === 0) return 0;
  let p = 0;
  // 4 0 3 1, len = 4
  let max = Math.max(...nums);
  let result = 0;
  while (p < nums.length) {
    result += nums[p];
    p++;
  }
  return ((nums.length + 1) * nums.length) / 2 - result;
};

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));
