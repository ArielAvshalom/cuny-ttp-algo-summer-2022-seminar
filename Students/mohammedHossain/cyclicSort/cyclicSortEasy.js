// Problem Statement #

// We are given an array containing ‘n’ objects.
//Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence.
//This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

// Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space.
//For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

// --- SOLUTION 1 --- //
const cyclic_sort = function (nums) {
  for (let i = 0; i < nums.length; ) {
    let in_order_num = i + 1;
    let current_num = nums[i];
    if (current_num !== in_order_num) {
      swap(nums, i, current_num - 1);
    } else {
      i++;
    }
  }

  return nums;
};

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
// --- SOLUTION 1 --- //

// --- ANOTHER SIMILAR SOLUTION --- //
// const cyclic_sort = function (nums) {
//   let i=0;
//   while(i < nums.length){
//     let j = nums[i] - 1;
//     if(nums[i] !== nums[j]){
//       [nums[i], nums[j]] = [nums[j], nums[i]]
//     }
//     else
//       ++i;
//   }
//   return nums;
// };
// --- ANOTHER SIMILAR SOLUTION --- //

console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`);
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);
