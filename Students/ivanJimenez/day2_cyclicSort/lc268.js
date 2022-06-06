// Problem Statement #

// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

const find_missing_number = function(nums) {
  let i = 0;
  while(i < nums.length){
    let j = nums[i] - 1;
    if(nums[i] !== nums[j]){
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    else{
      i++;
    }
  }

  for(let k = 0; k < nums.length; k++){
    if(nums[k] - 1 !== k){
      return k + 1;
    }
  }
  
  return nums.length;
};

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));