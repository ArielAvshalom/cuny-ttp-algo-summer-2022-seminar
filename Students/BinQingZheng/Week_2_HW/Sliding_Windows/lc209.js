// Problem Statement #

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
// Return 0 if no such subarray exists.

function smallest_subarray_with_given_sum(s, arr) {

    let window_start  = 0;
      windowSum = 0,
      minLength = Infinity;
  
    for( let window_end = 0; window_end < arr.length; window_end++ ) 
    {
      windowSum += arr[window_end];
       while(windowSum >= s) 
       {
        minLength = Math.min(minLength, window_end - window_start + 1);
        windowSum -= arr[window_start];
        window_start++;
       }
    }
    if (minLength === Infinity) return 0;
    else return minLength;
  }
  
  console.log(
    `Smallest subarray length: ${smallest_subarray_with_given_sum(
      7,
      [2, 1, 5, 2, 3, 2]
    )}`
  );
  console.log(
    `Smallest subarray length: ${smallest_subarray_with_given_sum(
      7,
      [2, 1, 5, 2, 8]
    )}`
  );
  console.log(
    `Smallest subarray length: ${smallest_subarray_with_given_sum(
      8,
      [3, 4, 1, 1, 6]
    )}`
  );
  
// Time complexity = O(n);
// Space complexity = O(1)
  