// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

function pair_with_target_sum(arr, targetSum) {
  // TODO:write code here
  count1=0;
  count2=0;
  let solpair=[];
  for(i=0;i<arr.length;i++){
    if(arr[i]==targetSum) continue;
    for(j=0;j<arr.length;j++){
     if(i==j) continue;
     if(arr[i]==targetSum) continue;
     if(arr[i]+arr[j]==targetSum){
      solpair.push(arr[i]);
      solpair.push(arr[j]);
      return solpair;
     }
    }
  }
  return solpair;
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));
