// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

function pair_with_target_sum(arr, targetSum) {
    // TODO:write code here
    let i = 0;
    let j = arr.length - 1;
    let result = [];

    while (arr[i] + arr[j] != targetSum) {
        if (arr[i] + arr[j] > targetSum) j--;
        else i++;
    }
    result.push(i);
    result.push(j);

    return result;
  }
  
  console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
  console.log(pair_with_target_sum([2, 5, 9, 11], 11));