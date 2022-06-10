// Problem Statement #

// Given an array arr of unsorted numbers and a target sum,
// count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j,
//  and k are three different indices. Write a function to return the count of such triplets.

const triplet_with_smaller_sum = function (arr, target) {
  let counter = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      // -2 -1 0 1 2 3, target = 5
      // -2 -1 3 = 0
      // -2 -1 2 = -1
      // -2 -1 1 = -2
      // -2 -1 0 = -3
      if (sum < target) {
        counter += right - left;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return counter;
};

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));
