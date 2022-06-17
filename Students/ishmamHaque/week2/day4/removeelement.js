// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.
//This is a function for removing elements not just duplicates
function remove_element(arr, key) {
  // TODO: Write code here
  arrlength=arr.length;
  count=0;
  while(arr[count]!=null){
    if(arr[count]==key) arr.splice(count,1);
    if(arr[count]!=key) count++;
  }
  return arr.length;
}
console.log(
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);
