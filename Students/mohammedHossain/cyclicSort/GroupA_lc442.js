// Problem Statement #

// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.

const find_all_duplicates = function(nums) {
  duplicateNumbers = [];
  // TODO: Write your code here
  return duplicateNumbers;
};

console.log(find_all_duplicates([3, 4, 4, 5, 5]));
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));

/*
For the interviewer
Before looking at the solution, try to think about cyclic sort, a pattern where you swap the values in an array-like data structure to get some semblance of order.
If you have an unordered array and you can only spend a constant amount of space (assuming that the duplicates don't comprise a large number of elements) and you want to achieve this in O(n), what can you do with the above constraints?
From a math perspective, there's the pigeonhole principle, if there are 'n' numbers, the range is from 1 to 'n' then there's only one case where there would be no duplicates right?
  *On a side note, make sure to guide your candidate to this idea if they don't discover it themselves.

So what can you do given the constraint above? Would there be any outOfBound errors if you made swaps based on the value and location of an array?

Use that to understand the solution below. The code below will run on an interpreter, if you're still stuck before the interview, try playing with it and testing cases.

Good luck!!!
 */




// Solution
// -----
// function find_all_duplicates(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     j = nums[i] - 1;
//     if (nums[i] != nums[j]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//     } else {
//       i++;
//     }
//   }

//   duplicateNumbers = [];
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] !== i + 1) {
//       duplicateNumbers.push(nums[i]);
//     }
//   }

//   return duplicateNumbers;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n).

// Space complexity #
// Ignoring the space required for storing the duplicates, the algorithm runs in constant space O(1).
