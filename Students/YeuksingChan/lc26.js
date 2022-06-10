// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it.
// You should not use any extra space; after removing the duplicates in-place
// return the length of the subarray that has no duplicate in it.

function remove_element(arr, key) {
  // TODO: Write code here
  const len = arr.length;
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      arr[i] = null;
      counter++;
    }
  }
  return len - counter;
}

console.log(
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);
