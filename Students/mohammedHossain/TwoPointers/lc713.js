// Problem Statement #

// Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;

  // first number will be multiplied by 1
  let product = 1;
  let result = 0;

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // product keeps track of product of current subarray
    product *= nums[right];

    // product exceed size of k, decrease it
    while (product >= k) {
      product /= nums[left];
      left++;
    }

    result += right - left + 1;
    right++;
  }
  return result;
};

console.log(numSubarrayProductLessThanK([2, 5, 3, 10], 30));
console.log(numSubarrayProductLessThanK([8, 2, 6, 5], 50));
