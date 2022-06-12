// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

function search_triplets(arr) {
  triplets = [];
  arr.sort((a, b) => a - b);
  let start1 = 0;
  let start2 = start1 + 1;
  let end = arr.length - 1;

  console.log(arr);

  while (start1 < end - 2)
  {
    if (start2 >= end)
    {
      start1++;
      start2 = start1 + 1;
      end = arr.length - 1;
    } else
    {
      if (arr[start1] + arr[start2] + arr[end] > 0) {
        end--;
      } else if (arr[start1] + arr[start2] + arr[end] < 0) 
      {
        start2++;
      } else 
      {
        if ((arr[start1] !== arr[start2]) && (arr[start1] !== arr[end]) && (arr[start2] !== arr[end]))
          triplets.push([arr[start1], arr[start2], arr[end]]);
    
        if (start2 + 1 < arr.length && arr[start2] === arr[start2 + 1])
          start2+=2;
        else if (start2 + 1 < arr.length)
          start2++;
      }
    }
  }

  for (let i = 0; i < triplets.length; i++)
  {
    console.log(triplets[i])
  }

  return triplets;
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));

