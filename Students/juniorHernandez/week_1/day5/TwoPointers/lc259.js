// Problem Statement #

// Given an array arr of unsorted numbers and a target sum,
// count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
// Write a function to return the count of such triplets.

const triplet_with_smaller_sum = function (arr, target) {
  count = -1;
  arr.sort();
  for (let i = 0; i < arr.length - 2; ++i) {
    // first pointer go up to 3rd to last idx
    let head = i + 1, // head will be the next pointer from the first
      tail = arr.length - 1; // tail start as last
    while (head < tail) { // while the head and tail idx don't repeat (unique)
      if (arr[i] + arr[head] + arr[tail] < target) { // if the sum of each idx less than target increase count
        if (count === -1) {
          count = 1;
        } else {
          ++count;
        }
        --tail;
      } else {
        --tail;
      }
    }
  }
  return count;
};

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));
