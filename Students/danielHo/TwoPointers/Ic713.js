// Problem Statement #

// Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

var numSubarrayProductLessThanK = function (nums, k) {
    // TODO: Write your code here
    if (k <= 1) return 0

    let product = 1;
    let answer = 0
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        product *= nums[j];
        while (product >= k) {
            product /= nums[i++];
        }
        answer += j - i + 1;
    }
    return answer;
  };
  

  console.log(numSubarrayProductLessThanK([2, 5, 3, 10], 30));
  console.log(numSubarrayProductLessThanK([8, 2, 6, 5], 50));