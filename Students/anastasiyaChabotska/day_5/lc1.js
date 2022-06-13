// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

function pair_with_target_sum(arr, targetSum) {

  //note to self, works on sorted
  //if unsorted, can use the dictionary approach, solved and tested on leetcode

  let l = 0;
  let r = arr.length - 1;

  while(l < r){
    const sum = arr[l]+arr[r];
    if (sum==targetSum) return [l, r]
    if (sum > targetSum) r--
    if(sum < targetSum) l++
  }

  return []
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));

