// Problem Statement #

// We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

const find_duplicate = function(nums) {
  let i = 0;
  while (i < nums.length)
  {
    let j = nums[i] - 1;
    if (j !== i && nums[j] !== nums[i])
      [nums[i], nums[j]] = [nums[j], nums[i]];
    else if (nums[j] === nums[i] && j !== i)
      return nums[i];
    else
      i++;
  }

  return -1;
};

console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));

