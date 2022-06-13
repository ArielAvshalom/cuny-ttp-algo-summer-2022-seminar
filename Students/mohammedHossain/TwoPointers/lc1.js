// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

function pair_with_target_sum(arr, targetSum) {
  // if there is 1 or no value, then return negative indices
  if (arr.length < 2) return [-1, -1]

  // left pointer at the start, right pointer at the end
  let left = 0
  let right = arr.length - 1

  // while the pointers do not meet in the next iteration
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === targetSum) {
      return [left, right]
    } else if (sum > targetSum) {
      // since numbers at the end of the array are larger, and may cause a
      // larger sum, we decrement the right pointer
      --right
    } else {
      // sum < targetSum
      // since numbers at the start of the array are smaller, and may cause a
      // smaller sum, we increment the left pointer
      ++left
    }
  }

  // not found
  return [-1, -1]
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6))
console.log(pair_with_target_sum([2, 5, 9, 11], 11))
