// Problem Statement #

// Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

const numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) {
      return 0;
    }
    let left = 0, right = 0, count = 0, product = 1;
    for (right = 0; right < nums.length; right++) {
      product *= nums[right];
      while ( product >= k) {
        product /= nums [left];
        left += 1;
      }
      //Each time we find a product that is less than k, add the length of a subarray (right - left + 1) to the count.
      count += right -left + 1;
    }
    return count; 
};

console.log(numSubarrayProductLessThanK([20, 5, 2, 6], 200));

console.log(numSubarrayProductLessThanK([2, 5, 3, 10], 30));

console.log(numSubarrayProductLessThanK([8, 2, 6, 5], 50));

// Time Complexity: O(n)
// Space Complexity: O(1)