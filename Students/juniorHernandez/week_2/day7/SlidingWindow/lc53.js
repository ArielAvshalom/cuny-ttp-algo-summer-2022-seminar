// Problem Statement #

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

function max_subarray_size_k(k, arr) {
  
  let sum=0, maxSum = 0;
  let head = 0;

  for(let tail = 0; tail < arr.length-1; ++tail){
    sum += arr[tail] //Add the next element
    if(tail >= head + (k - 1)){//if the tail reaches the limit of the window
      if(sum > maxSum){//check if there exist a new max sum
        maxSum = sum
      }
      sum = 0; //reset the sum before sliding the window
      ++head //move the head up one
      tail = head-1; //we want the tail to be the new head so we make it one less for when we update it will be equal to head
    }
    
  }
  return maxSum
}

console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    3,
    [2, 1, 5, 1, 3, 2]//6
    //2 + 1 + 5 = 8
    //1 + 5 + 1 = 7

  )}`
);

console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    2,
    [2, 3, 4, 1, 5]
  )}`
);

