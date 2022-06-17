// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. 
// You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

function remove_duplicates(arr) {
    if (arr.length < 2) {
      return arr.length;
    }
    arr.sort((a, b) => a - b);
    let l = 1;
    for (let r = 1; r < arr.length; r++) {
      if (arr[r] !== arr[r-1] ) {
        arr[l] = arr[r];
        l += 1;
        //console.log ("l: " + l);
      }
    }
    //total number of unique elements in the array
    return l;
};
  
console.log(
    `Array new length: ${remove_duplicates([3, 2, 3, 6, 3, 10, 9, 3])}`
);
console.log(`Array new length: ${remove_duplicates([2, 11, 2, 2, 1])}`);

// Time Complexity: O(n)
// Space Complexity: O(1)