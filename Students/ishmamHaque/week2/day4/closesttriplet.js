// Problem Statement #
// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.
const triplet_sum_close_to_target = function (arr, target_sum) {
  maximum = -99999999999999;
  arr.sort((a,b) => a-b);
  // TODO: Write your code here
  for(let i=0;i<arr.length-2;i++){
   j=i+1;
   k=arr.length-1;
   while(j<k){
    if(Math.abs(target_sum-(arr[i]+arr[j]+arr[k]))<Math.abs(target_sum-maximum)){
     maximum=arr[i]+arr[j]+arr[k];
    }
    if(arr[i]+arr[j]+arr[k]>target_sum){
     k--;
    }
    else{
     j++;
    }
   }
  }
    return maximum;
}
console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));
