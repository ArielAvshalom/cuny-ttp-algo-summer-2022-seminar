// Problem Statement #

// Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

// Example 1:

// Input: nums=[1, 2, -1, 3, 5], k = 2
// Output: [1.5, 0.5, 1.0, 4.0]
// Explanation: Lets consider all windows of size ‘2’:

//   - [1, 2, -1, 3, 5] -> median is 1.5
//   - [1, 2, -1, 3, 5] -> median is 0.5
//   - [1, 2, -1, 3, 5] -> median is 1.0
//   - [1, 2, -1, 3, 5] -> median is 4.0

// Example 2:

// Input: nums=[1, 2, -1, 3, 5], k = 3
// Output: [1.0, 2.0, 3.0]
// Explanation: Lets consider all windows of size ‘3’:

//   - [1, 2, -1, 3, 5] -> median is 1.0
//   - [1, 2, -1, 3, 5] -> median is 2.0
//   - [1, 2, -1, 3, 5] -> median is 3.0

class SlidingWindowMedian {
  find_sliding_window_median(nums, k) {
    result = [];
    // TODO: Write your code here
    return result;
  }
}

var slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 2);

console.log(`Sliding window medians are: ${result}`);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 3);
console.log(`Sliding window medians are: ${result}`);
