// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
        right--;
        left++;
      }
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      }
    }
  }
  return result;
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));
