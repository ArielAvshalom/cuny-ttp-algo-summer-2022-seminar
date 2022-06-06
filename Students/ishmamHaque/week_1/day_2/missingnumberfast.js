// Problem Statement #

// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

const find_missing_number = function(nums) {
  // TODO: Write your code here
   let i=0;
  //This is my sorting alg
  while(i<nums.length){
   const j= nums[i]-1;
   if(nums[i]!==nums[j]){
    let temp=nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
   }
    else{
     i=i+1;
    }
  }
  for (i = 0; i < nums.length; i++) {
   if (nums[i] !== i + 1) {
     return i+1;
   }
 }
  return -1;
};

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));
