// Problem Statement #

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

function max_subarray_size_k(k, arr) {
  if (k > arr.length) return -1;

  let currentSum = 0;
  let maxSum = -1;
  let leftWindow = 0;

  for (let rightWindow = 0; rightWindow < arr.length; rightWindow++) {
    currentSum += arr[rightWindow];

    const currentLength = rightWindow - leftWindow + 1;

    if (currentLength === k) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= arr[leftWindow];
      leftWindow++;
    }
  }

  return maxSum;
}

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
