// Problem Statement #

// We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

const find_duplicate = function(nums) {

  let duplicate;

  for (let i=0; i<nums.length; i++){
    if(nums[i]==i+1)
    continue;

    while(nums[i]!=i+1){
      if (nums[nums[i]-1]==nums[i]){
        duplicate = nums[i];
        break;

      }
      let temp = nums[nums[i]-1];
      nums[nums[i]-1] = nums[i];
      nums[i]=temp;
    }
  }
  return duplicate;
};

console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));

