// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

function remove_element(nums, key) {
  let left = 1;

  for (let right = 1; right < nums.length; right++) {
    // if "unique value"
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
}

console.log(
  `Array new length: ${remove_element(
    [3, 2, 3, 6, 3, 10, 9, 3].sort((a, b) => a - b),
    3
  )}`
);
console.log(
  `Array new length: ${remove_element(
    [2, 11, 2, 2, 1].sort((a, b) => a - b),
    2
  )}`
);
