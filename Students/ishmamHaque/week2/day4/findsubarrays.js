// Problem Statement #

// Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

var find_subarrays = function (nums, k) {
  // TODO: Write your code here
  let allsub=[];
  for(i=0;i<nums.length;i++){
   for(j=1;j<=nums.length;j++){
    product=1;
    let currarr=[];
    for(a=i;a<j;a++){
     currarr.push(nums[a]);
     product=product*nums[a];
    }
    if(product<k && currarr.length!=0){
      allsub.push(currarr);
    }
   }  
  }
  return allsub;
};

console.log(find_subarrays([2, 5, 3, 10], 30));
console.log(find_subarrays([8, 2, 6, 5], 50));
