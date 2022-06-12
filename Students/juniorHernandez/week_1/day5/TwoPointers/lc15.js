// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

function search_triplets(arr) {
  let triplets = [];
  arr = arr.sort()
  //check for any 3 element whose sum equals 0.
  //add those into a triplet array then remove those elements from arr.
  //repeat the check and keep adding triplets into triplet array when found.
  //if no triplet is found return triplet

  let size = arr.length;
  while (true) {

    break;
  }

  return triplets;
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));
