// Problem Statement #

// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. 
// Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

const find_missing_number = function(nums) {
  // TODO: Write your code here
  let searchFor=0;
  let i=0;
  while(i < nums.length){
    let j = nums[i] - 1;
    if(nums[i] != nums[j]){
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
      else
        ++i;
  }

  for(let j= -1; j<nums.length; ++j){
    if(nums[j] != j+1)
      searchFor = j+1;
  }
  return searchFor;
};

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));

