// Problem Statement #

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

function smallest_subarray_with_given_sum(s, arr) {
  
  let sum = 0;
  let windowStart = 0;
  let minLength = +Infinity;
  for(let windowEnd=0; windowEnd < arr.length; windowEnd++){
    sum += arr[windowEnd];
    console.log(sum);

    if(sum >= s) {
      //try seeing if we can get even less
      sum -= arr[windowEnd];
      while (windowStart <= windowEnd && sum >= s){
        windowEnd--;
        sum -= arr[windowEnd];
      }

      if (windowEnd - windowStart + 1 < minLength) minLength = windowEnd - windowStart + 1;

      windowStart++;
      windowEnd = windowStart;



    }


  }

  return minLength;




}

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 3, 2]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 8]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    8,
    [3, 4, 1, 1, 6]
  )}`
);




















  // let startWindow  = 0;
  // let windowSum = 0;
  // let minLength = Infinity;


  // for( let endWindow = 0; endWindow < arr.length; endWindow++)
  // {

  //   windowSum += arr[endWindow];

  //    while(windowSum >= s)
  //    {
  //     minLength = Math.min(minLength, endWindow - startWindow + 1)
  //     windowSum -= arr[startWindow]
  //     startWindow++;

  //    }
  // }

  // return minLength;