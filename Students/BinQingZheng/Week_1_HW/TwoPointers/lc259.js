// Problem Statement #

// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. 
// Write a function to return the count of such triplets.

const triplet_with_smaller_sum = function(arr, target) {
  if (arr.length <3) {
    return 0;  
  }
  arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i <arr.length; i++) {
    let left = i+1, right = arr.length -1;
    while (left < right) {
      const current_sum = arr[i] + arr[left] + arr[right];
      if(current_sum < target) {
        count += right-left;
        left++; 
      } else {
        right--;
      }
    }
  }
  return count;
};
 
console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));

//Time complexity = O(n^2)
//Space Complexity: O(1)
