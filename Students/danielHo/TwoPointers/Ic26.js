// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

function remove_element(arr, key) {
    // TODO: Write code here

    // Null array
    if (arr.length === 0) {
        return 0;
    }

    // Sorting the array in O(n log(n))
    arr.sort((a, b) => a - b); 

    let i = 0;

    // Return the number of unique values in the array
    for(let j = 1; j < arr.length; j++)
        if(arr[i] != arr[j]) 
            arr[i++] = arr[j];    

    return i+1;
  }
  
  console.log(
    `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
  );

  console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);