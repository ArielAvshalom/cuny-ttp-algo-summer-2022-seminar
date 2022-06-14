// Problem Statement #

// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

const triplet_with_smaller_sum = function(arr, target) {
  count = -1;
  // TODO: Write your code here
  count=0;
   arr.sort((a,b) => a-b);
  // TODO: Write your code here
  for(let i=0;i<arr.length-2;i++){
   j=i+1;
   k=arr.length-1;
   while(j<k){
    if(arr[i]+arr[j]+arr[k]<target){
     count+=1;
     j++;
    }
    else{
     k--;
    }
   }
  }
  return count;
};

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));
