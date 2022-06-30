// Problem Statement #

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

function smallest_subarray_with_given_sum(s, arr) {
  // TODO: Write code here


  let startWindow  = 0;
  let windowSum = 0;
  let minLength = Infinity;


  for( let endWindow = 0; endWindow < arr.length; endWindow++)
  {

    windowSum += arr[endWindow];

     while(windowSum >= s)
     {
      minLength = Math.min(minLength, endWindow - startWindow + 1)
      windowSum -= arr[startWindow]
      startWindow++;

     }
  }

  return minLength;

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

// Solution
// -----
// let windowSum = 0,
// minLength = Infinity,
// windowStart = 0;

// for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
// windowSum += arr[windowEnd]; // add the next element
// // shrink the window as small as possible until the 'window_sum' is smaller than 's'
// while (windowSum >= s) {
//   minLength = Math.min(minLength, windowEnd - windowStart + 1);
//   windowSum -= arr[windowStart];
//   windowStart += 1;
// }
// }

// if (minLength === Infinity) {
// return 0;
// }
// return minLength;
