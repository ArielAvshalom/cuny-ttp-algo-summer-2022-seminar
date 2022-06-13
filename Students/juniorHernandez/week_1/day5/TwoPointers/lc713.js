// Problem Statement #

// Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

var numSubarrayProductLessThanK = function (nums, k) {
  let subArrIdx = [];


  for (let i = 0; i < nums.length - 1; ++i) {
    let tail = i + 1;
    //starting at the first element going up to 2nd to last element of arr
    if (nums[i] * nums[tail] < k) {
      //if the prroduct of array at head and tail is less than the target
      let product = nums[i] * nums[tail]; // track that product
      // console.log(` ${nums[i]} * ${nums[tail]} = ${product}`);
      // console.log(`range : [${i}, ${tail}]`);
      do {
        ++tail; //move the tail up to the next element
        // console.log(` ${product} * ${nums[tail]} = ${product * nums[tail]} || looking for ${k}\n----------------------------\n`);
        if(nums[tail]===undefined){
          --tail;
          break}
        if (product * nums[tail] >= k) {
          --tail;
          // console.log(`range : [${i}, ${tail}]`);
          //if the product of the array at tail * product variable  > target break out of loop;
          break;
        }
      } while (product < k); //while the product is less than the target
      // console.log(`we're adding to the array [${nums[i]},${nums[tail]}]`)
      // subArrIdx.push([i, tail]);
      subArrIdx.push([nums[i], nums[tail]]);
    }
  }
  //console.log(`tail is ${tail}`);
  return subArrIdx;
};

console.log(numSubarrayProductLessThanK([2, 5, 3, 10], 30)); // => [[2,5],[5,3]]
console.log(numSubarrayProductLessThanK([8, 2, 6, 5], 50)); // => [[8,2],[6,5]]
