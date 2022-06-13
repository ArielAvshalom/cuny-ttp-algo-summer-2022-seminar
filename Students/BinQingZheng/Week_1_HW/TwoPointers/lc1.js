// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.


const pair_with_target_sum = function (arr, targetSum) {
    if (arr.length <= 1) {
        return [-1, -1];
    }
    let low = 0,
        high = arr.length - 1;
    while (low < high) {
        if (arr[low] + arr[high] === targetSum) {
            return [low, high];
        } else if ( arr[low] + arr[high] < targetSum){
            low++;
        } else {
            high--;
        }
    }
    // no pair found 
    return [-1, -1];
};

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));
console.log(pair_with_target_sum([2], 11));
console.log(pair_with_target_sum([2, 5, 9, 11], 15));

// Time complexity = O(n)
// Space complexity = O(1)

