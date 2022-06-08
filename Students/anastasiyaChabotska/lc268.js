// Problem Statement #

// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

const find_missing_number = function(nums) {

  
  let missingNumber;

  for (let i=0; i<=nums.length; i++){
    //handle udnefined to avoid accessing at index undefined
    if (nums[i] == i || nums[i] == undefined)
    continue;

    while (nums[i]!=i){
      let temp = nums[nums[i]];
      nums[nums[i]] = nums[i];
      nums[i] = temp;

      if (nums[i]==undefined)
      break;
      
    }

  }

  console.log(nums);

  for (let i=0; i<=nums.length; i++){
    if(nums[i] == undefined){
    missingNumber = i;
    break;
    }
  }


  return missingNumber;
};

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));
console.log(find_missing_number([0, 2, 3]));
