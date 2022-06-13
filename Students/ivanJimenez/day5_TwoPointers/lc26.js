// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

function remove_element(arr, key) {
  arr.sort(function(a, b) {
    return a - b;
  });

  let start = 0;
  let end = arr.length - 1;
  while(arr[start] !== key || arr[end] !== key){
    if(arr[start] !== key){
      start += 1;
    }
    if(arr[end] !== key){
      end -= 1;
    }
  }
  arr.splice(start, end - 1);
  return arr.length;
}

console.log(
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);

