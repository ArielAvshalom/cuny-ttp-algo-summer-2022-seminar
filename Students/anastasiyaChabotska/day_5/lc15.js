// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

function search_triplets(arr) {
  triplets = [];

  arr.sort();

  for (let i =0; i< arr.length; i++){
    let l = i+1;
    let r = arr.length - 1;

    while(l < r){
      const sum = arr[l] + arr[r];
      if(arr[i] + sum == 0){
       triplets.push([arr[i], arr[l], arr[r]])
       l++
       while (arr[l]==arr[l-1] && l <r) l++;
      }
      if(arr[i] + sum < 0) l++
      if(arr[i] + sum > 0) r--


    }
  }
 
  return triplets;
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));


//pseudocode

//[-3, -2, -1, 0, 1, 1, 2]

//for i in nums
//initialize l = i + 1 and r = nums.length -1
//const sum = nums [l] + nums[r]
//if nums[i] + sum == 0 -> store the triplets
// if less, increment l
//if more, decrement r 
