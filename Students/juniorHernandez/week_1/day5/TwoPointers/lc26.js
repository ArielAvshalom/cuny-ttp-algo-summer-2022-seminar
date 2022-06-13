// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space;
// after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

function remove_element(arr, key) {
  let size;
  arr.sort((a , b) => {
   if (a < b) {
     return -1;
   }
   if (a > b) {
     return 1;
   }

   // a and b are be equal
   else{
    arr.splice(arr.indexOf(b), 1);//if the number is repeating then remove it from the array
    size = arr.length;//set the new size of the array
    return 0;}

  });
  
  return size
}

console.log(
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);

