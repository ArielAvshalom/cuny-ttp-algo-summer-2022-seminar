// Problem Statement #
// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. 
// If there are more than one such triplet, return the sum of the triplet with the smallest sum.

const triplet_sum_close_to_target = function (arr, target_sum) {
    arr.sort((a, b) => a-b);
    let best_sum = arr[0] + arr[1] + arr[2];
    for (let i = 0; i<arr.length-2; i++) {
      let low = i+1, high = arr.length-1;
      while (low < high) {
        const sum = arr[i] + arr[low] +arr[high];
        if (sum > target_sum) {
          high -=1;
        } else {
          low +=1;
        }
        if (Math.abs(target_sum - sum) < Math.abs(target_sum - best_sum)) {
          best_sum = sum;
        }
      }
    }
    return best_sum;
};
  
console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));

//Time Complexity: O(n^2)
//Space Complexity: O(1)

