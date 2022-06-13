// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

function search_triplets(nums) {
  triplets = [];

  // first we sort the array since it is difficult
  // to solve considering we have duplicates
  nums.sort((a, b) => a - b);

  // first loop gives us the first value
  for (let i = 0; i < nums.length; i++) {
    // make sure we are not using a repeat of the same number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) right--;
      else if (sum < 0) left++;
      else {
        // sum === 0
        triplets.push([nums[i], nums[left], nums[right]]);
        // keep shifting left until it is pointing to a new value
        left++;
        while (nums[left] === nums[left - 1] && left < right) left++;
      }
    }
  }
  return triplets;
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));
// console.log(search_triplets([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
