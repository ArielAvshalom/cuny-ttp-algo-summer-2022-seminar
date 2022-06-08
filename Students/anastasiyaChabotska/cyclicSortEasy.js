// Problem Statement #

// We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

// Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

const cyclic_sort = function (nums) {

  for (let i=0; i<nums.length; i++){
    if (nums[i]==i+1){
      continue;
    }
    
    while (nums[i] != i+1){
      let temp = nums[nums[i]-1];
      nums[nums[i]-1] = nums[i];
      nums[i] = temp; 
    }

  }
  return nums;
};

console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`);
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);