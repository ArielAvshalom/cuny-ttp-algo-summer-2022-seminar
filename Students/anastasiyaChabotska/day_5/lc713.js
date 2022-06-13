// Problem Statement #

// Given an array with positive numbers and a target number, 
//find all of its contiguous subarrays whose product is less than the target number.

var numSubarrayProductLessThanK = function (nums, k) {

  let count = 0;
  let res = [];
  for (let i = 0; i< nums.length - 1; i++){
    let p = i + 1;

    if (product(i, p, nums) < k){
    while(product(i, p, nums) < k && p < nums.length){
      // res.push ([nums[i]], [i, p]);
      //something is wrong here 
      count = count + 2;
      p++;
    }
  }
  else 
  {
    // res.push(nums[i])
    count++
  }
  }

    
  

  // console.log(res);
  return count;
};

var product = function(i, p, nums){
  let product = nums[i];
  while (i < p){
    product = product * nums[p];
    p--;
  }
  return product;
}

// console.log(find_subarrays([2, 5, 3, 10], 30));
// console.log(find_subarrays([8, 2, 6, 5], 50));
console.log(numSubarrayProductLessThanK([2, 5, 3, 10], 30));
console.log(numSubarrayProductLessThanK([8, 2, 6, 5], 50));



//for i =0, i< nums.length; i++
// p = i + 1
// while (prod < k && p < nums.length) p++
// count = i + 1 + i

//func prod(i, p, arr)
//       


//Gauss sum of n numbers = (n * (n+1)) / 2

