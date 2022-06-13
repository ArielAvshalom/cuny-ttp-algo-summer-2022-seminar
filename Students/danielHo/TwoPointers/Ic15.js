// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

function search_triplets(arr) {
    triplets = [];
    // TODO: Write your code here
    let dict = {}

    arr.sort((a, b) => a - b);

    for(let i = 0; i < arr.length; i++) {
        dict[arr[i]] = 0 - arr[i];
    }

    for (let num in dict) {
        let index = 0; // Avoid duplicates
        let i = 0;
        let j = arr.length - 1;

        while (i < j) {
            if (index == i || arr[i] + arr[j] < dict[num]) i++;
            if (index == j - index || arr[i] + arr[j] > dict[num]) j--;
            if (arr[i] + arr[j] == dict[index]) triplets.push([arr[i], arr[j], num])
        }

        index++;
    }

    return triplets;
  }
  
  console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
  console.log(search_triplets([-5, 2, -1, -2, 3]));
  