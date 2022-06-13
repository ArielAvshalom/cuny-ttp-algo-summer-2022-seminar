// Problem Statement #

// Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

var numSubarrayProductLessThanK = function (nums, k) {
  // TODO: Write your code here
  let subArr = [];
  let head = 0, tail= head + 1, product;
  
  nums.sort();
  for(let i = 0; i < nums.length - 1; ++i){
    if(nums[head] * nums[tail] < k){
     product = nums[head] * nums[tail];
     while(product < k){
       ++tail;
       if(product * nums[tail] >= k){
        break;
       }
     }
     console.log(`tail is ${tail}`)
    }

  }
};

numSubarrayProductLessThanK([2, 5, 3, 10], 30);

// console.log(find_subarrays([2, 5, 3, 10], 30)); // => [[2,5],[5,3]]
// console.log(find_subarrays([8, 2, 6, 5], 50)); // => [[8,2],[6,5]]

