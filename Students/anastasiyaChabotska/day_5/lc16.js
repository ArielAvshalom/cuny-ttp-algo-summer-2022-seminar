// Problem Statement #
/* Given an array of unsorted numbers and a target number, 
find a triplet in the array whose sum is as close to the target number as possible, 
return the sum of the triplet. 
If there are more than one such triplet, return the sum of the triplet with the smallest sum.
*/


const triplet_sum_close_to_target = function (arr, target_sum) {

  arr.sort((a, b)=> a - b);
  console.log(arr);

  let closestGlobal = arr[0] + arr[1] + arr[2];
  for (let i =0; i<arr.length; i++){
    let l = i + 1;
    let r = arr.length - 1;
    let closest = arr[i] + arr[l] + arr[r];
    while (l < r){
      let temp = arr[i] + arr[l] + arr[r];
      if(temp == target_sum) closest = temp;
      if (Math.abs(target_sum - temp) < Math.abs(target_sum - closest)) closest = temp;
      if (temp < target_sum) l++
      if(temp > target_sum) r--
    }
    if (Math.abs(target_sum - closest) < Math.abs(target_sum - closestGlobal)) closestGlobal = closest;
    if(Math.abs(target_sum - closest) == Math.abs(target_sum - closestGlobal)){
      closestGlobal = closest < closestGlobal ? closest : closestGlobal;
    }
  }
  return closestGlobal;
};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));

//sort array
//-2 0 1 2
//for each
//  -2 
//initialize l r 
//closest = arr[i] + arr[l] + arr[r]
//while (l < r)
// temp = arr[i] + arr[l] + arr[r]
// if target_sum - temp  < target_sum - closest
//    closest = arr[i] + arr[l] + arr[r] 

// if temp < target l++
// if temp > target r--
//if temp == target return temp