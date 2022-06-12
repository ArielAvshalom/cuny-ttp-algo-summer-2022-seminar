// Problem Statement #
// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

const triplet_sum_close_to_target = function (arr, target_sum) {
  arr.sort((a, b) => a - b);
  let start1 = 0;
  let start2 = start1 + 1;
  let end = arr.length - 1;
  let sumOfTriplet = arr[start1] + arr[start2] + arr[end];

  while (start1 < end - 2)
  {
    if (start2 >= end)
    {
      start1++;
      start2 = start1 + 1;
      end = arr.length - 1;
    } else if ( start2 + 1 )
    {
      temp = arr[start1 + 1] + arr[start2 + 1] + arr[end + 1];

    }


  }

  return -1;
};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));

