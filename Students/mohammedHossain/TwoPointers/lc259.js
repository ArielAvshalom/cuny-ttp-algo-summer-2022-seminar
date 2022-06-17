// Problem Statement #

// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

// brute force O(n^3)
const triplet_with_smaller_sum = function (nums, target) {
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; j < nums.length; j++) {
        if ((is_good_triplet(nums[i], nums[j], nums[k]), target)) count++;
      }
    }
  }
  return count;
};

function is_good_triplet(triplet, target) {
  if (triplet.length < 3) return false;
  return triplet[0] + triplet[1] + triplet[2] < target;
}

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));
