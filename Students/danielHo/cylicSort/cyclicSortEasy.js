// Problem Statement #

// We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

// Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

const cyclic_sort = function (nums) {
    // TODO: Write your code here

    // Starting at position 0
    // Check if it value is equal to the index + 1
    // if it is equal to then move to the next index
    // else look for index of the value that belongs there and swap
    i = 0;
    while(i < nums.length) {
  
      if (nums[i] == i + 1) {
          i++;
      }
      else {
        let temp = nums[i];
        
        // swap with the value at position nums[i] - 1
        nums[i] = nums[nums[i] - 1]

        nums[temp - 1] = temp; 
      }

    // [3, 1, 5, 4, 2]
    // [5, 1, 3, 4, 2]
    // [2, 1, 3, 4, 5]
    // [1, 2, 3, 4, 5]
      
    }

    return nums;
  };
  
  console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
  console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`);
  console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);