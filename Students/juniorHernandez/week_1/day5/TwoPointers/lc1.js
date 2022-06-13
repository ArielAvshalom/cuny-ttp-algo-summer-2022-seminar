// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

function pair_with_target_sum(arr, targetSum) {
  let indices = []
  let head = 0, tail = arr.length-1;

  // for(let i = 0; i < arr.length-1; i++){
  //   for(let j = i + 1; j < arr.length; j++){
  //     if(arr[i] + arr[j] === targetSum)
  //       indices = [i,j]
  //   }

  // }
  while(head < tail){
    if (arr[head] + arr[tail] === targetSum) {
      indices.push(head, tail)
      break;
    } else if (arr[head] + arr[tail] > targetSum) {
      --tail;
    } else {
      ++head;
    }
  }
  //console.log(indices)
  return indices
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));

