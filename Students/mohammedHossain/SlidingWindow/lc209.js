// Problem Statement #

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

function smallest_subarray_with_given_sum(s, arr) {
  let minLength = Number.MAX_VALUE;
  let currentSum = 0;
  let leftWindow = 0;

  for (let rightWindow = 0; rightWindow < arr.length; rightWindow++) {
    currentSum += arr[rightWindow];

    while (currentSum >= s) {
      let currentLength = rightWindow - leftWindow + 1;

      minLength = Math.min(minLength, currentLength);
      currentSum -= arr[leftWindow];
      leftWindow++;
    }
  }

  return minLength != Number.MAX_VALUE ? minLength : 0;
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
