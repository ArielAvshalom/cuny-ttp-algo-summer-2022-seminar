// Problem Statement #

// Given an array arr of unsorted numbers and a target sum, 
//count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. 
//Write a function to return the count of such triplets.

const triplet_with_smaller_sum = function(arr, target) {
  count = 0;

  arr.sort((a, b)=> a - b);

  for (let i =0; i < arr.length - 2; i++){
    let l = i + 1;
    let r = arr.length - 1;

    while (l < r){
      let sum = arr[i] + arr[l] + arr[r];
      if (sum < target){
        while(l < r){
          count++
          r--
        }
        continue;
      }
      else r--;
    }

  }
  return count;
};

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));


//sort
//for i = 0, i < arr.length - 1
// init l = i + 1, r = arr.length
//while (l < r && l <= i + 1)
//    let sum = arr[i] + arr[l] + arr[r]
//    if (sum < target) { 
  //        while (r!=l)
  //          add all combinations of i, l, and r
  //           r--

  // reset r to end of array
//     }
//    else r--
