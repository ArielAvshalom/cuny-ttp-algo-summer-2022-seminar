// Problem Statement #
// Given an array of unsorted numbers and a target number,
// find a triplet in the array whose sum is as close to the target number as possible,
// return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

const triplet_sum_close_to_target = function (arr, target_sum) {
  arr.sort((a, b) => a - b);
  let closestSum = 9999;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === target_sum) {
        return target_sum;
      }
      if (Math.abs(target_sum - sum) < Math.abs(target_sum - closestSum)) {
        closestSum = sum;
      }
      if (sum < target_sum) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));
