// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

function remove_element(arr, key) {

  arr.sort((a, b)=> a - b);

  console.log(arr)

  let lastIndex = -1;
  let i = arr.length - 1;
  while (i > 0){
    if(arr[i]==arr[i-1]){
      let temp = arr[i];
      let p = i;
      while (arr[p]==arr[i]){
        arr[p] = '_';
        p--;
      }
      arr[p] = temp;
    
      lastIndex = p;
      while (i < arr.length){
      
        arr[p+1] = arr[i+1];
        p++
        i++



      }

      i = lastIndex;


    }
    else {
      // let temp = arr[i];
      // arr[i] = arr[i-1];
      // arr[i - 1] = temp;
      i--
    }
  }

  return lastIndex;

  console.log("AFTER", arr);

}

console.log(
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);

//says sorted in the description, but input is not sorted!!!???
//anyways, let's sort first then
//ex [0, 0, 1, 1, 1, 2, 3, 4, 4]
// let lastIndex = 0
//for let i = 1, i<arr.length
//  if (arr[i] == arr[i-1]) 
//      let p = i
//      while (arr[p]==arr[i])
//          arr[p]="_" p++
//  i = p - 1
//

//start from end
//use while loop
//


