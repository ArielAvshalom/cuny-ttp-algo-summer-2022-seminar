// Problem Statement #

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

function max_subarray_size_k(k, arr) {
    if (k === 0 || arr.length === 0) return 0;

    let window_start =0 ;
      maxSum = 0, 
      windowSum = 0; 
    
    //extend the window range [window_start, window_end]
    for (let window_end = 0; window_end < arr.length; window_end++) {
      //const rightNum = arr[window_end];
      windowSum += arr[window_end]; // add the next element to the window
      // When we the window size is k, update maximum sum, and slide the window
      if (window_end - window_start +1 === k) {
        maxSum = Math.max(windowSum, maxSum);
        windowSum -= arr[window_start]; // // Subtract the element going out of the window
        window_start ++; // slide the window to the right
      }
    }
    return maxSum;
};

console.log(
    `Maximum sum of a subarray of size K: ${max_subarray_size_k(
      3,
      [2, 1, 5, 1, 3, 2]
    )}`
);
  
console.log(
    `Maximum sum of a subarray of size K: ${max_subarray_size_k(
      2,
      [2, 3, 4, 1, 5]
    )}`
);

// Time complexity = O(n);
// Space complexity = O(1)