// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

function pair_with_target_sum(arr, targetSum) {
  let start = 0;
  let end = arr.length - 1;
  while (start !== end)
  {
    if (arr[start] + arr[end] > targetSum)
      end--;
    else if (arr[start] + arr[end] < targetSum)
      start++;
    else
      return [start, end];
  } 
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));

