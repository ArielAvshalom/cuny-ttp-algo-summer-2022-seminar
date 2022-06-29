// Problem Statement #

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

function max_subarray_size_k(k, arr) {
  // TODO: Write your code here
  maxsum=0;
  if(arr.length<k) return -1;
  else if(arr.length==k){
    for(i=0;i<arr.length;i++){
     maxsum=maxsum+arr[i];
    }
    return maxsum;
  }
  else{
     for(i=0;i<=arr.length-k;i++){
        index=i;
        currsum=0;
        for(j=i;j<=i+k-1;j++){
         currsum=currsum+arr[j];
        }
        if(currsum>maxsum) maxsum=currsum;
     }
  }
  return maxsum;
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
