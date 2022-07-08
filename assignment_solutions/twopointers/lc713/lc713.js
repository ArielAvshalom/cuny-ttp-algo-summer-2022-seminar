// Problem Statement #

// Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

var numSubarrayProductLessThanK = function (nums, k) {
  // TODO: Write your code here
};

console.log(find_subarrays([2, 5, 3, 10], 30));
console.log(find_subarrays([8, 2, 6, 5], 50));

// Solution
// -----

// var numSubarrayProductLessThanK = function(nums, k) {
//   let count = 0
//   let j = 0
//   let i = 0
//   let product = 1

//   while (i < nums.length && j < nums.length) {
//       if (product * nums[i] < k) {
//           product = product * nums[i]
//           count   = count + (i - j + 1)
//           i++
//       } else {
//           if (nums[j]) product = product / nums[j]
//           j++
//       }
//   }

//   return count
// }

// -----
