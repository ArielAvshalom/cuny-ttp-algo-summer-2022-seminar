// Problem Statement #
// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, 
// return the sum of the triplet. 
// If there are more than one such triplet, return the sum of the triplet with the smallest sum.

const triplet_sum_close_to_target = function (arr, target_sum) {
  // TODO: Write your code here
  arr.sort()
  let min = undefined;
  console.log(arr)
  for(let i = 0; i < arr.length; ++i){
    let head = i + 1, tail = arr.length - 1;
    while(head < tail){
      let sum = arr[i] + arr[head] + arr[tail];
      if(min ==undefined){
        min = sum;
        console.log(
          `min is: ${min} from [${arr[i]}, ${arr[head]}, ${arr[tail]}]`
        );
        --tail;
      }else if(sum < min){
        min = sum;
        console.log(
          `new min is: ${min} from [${arr[i]}, ${arr[head]}, ${arr[tail]}]`
        );
        --tail;
      }else{
        --tail;
      }
    }
    
  }

  return -1;
};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
// console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
// console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));

