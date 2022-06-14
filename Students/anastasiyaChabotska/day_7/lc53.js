// Problem Statement #

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

function max_subarray_size_k(k, arr) {

  let maxSum = -1;
  let tempSum = 0;
  let windowStart = 0;
  
  for (windowEnd = 0; windowEnd < arr.length; windowEnd++){

    tempSum += arr[windowEnd];

    if(windowEnd >= k - 1){
      if (tempSum > maxSum) maxSum = tempSum
      tempSum = tempSum - arr[windowStart];
      windowStart++;
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



//let maxSum = 0
//let tempSum = 0
// let windowStart = 0
// for (windowEnd = 0; windowEnd < arr.length; windowEnd++)
//      tempSum += arr[windowEnd]
//      windowEnd >= K - 1
//      tempSum > maxSum ? maxSum = tempSum 
//      tempSum - arr[windowStart]
//      windowStart++
