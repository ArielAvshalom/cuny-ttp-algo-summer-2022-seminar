// Problem Statement #
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

function make_squares(arr) {
  // TODO: Write code here
}

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);

// Solution
// -----
// const n = arr.length;
// squares = Array(n).fill(0);
// let highestSquareIdx = n - 1;
// let left = 0,
//   right = n - 1;
// while (left <= right) {
//   let leftSquare = arr[left] * arr[left],
//     rightSquare = arr[right] * arr[right];
//   if (leftSquare > rightSquare) {
//     squares[highestSquareIdx] = leftSquare;
//     left += 1;
//   } else {
//     squares[highestSquareIdx] = rightSquare;
//     right -= 1;
//   }
//   highestSquareIdx -= 1;
// }

// return squares;

// -----

// Time complexity #
// The above algorithm’s time complexity will be O(N) as we are iterating the input array only once.

// Space complexity #
// The above algorithm’s space complexity will also be O(N); this space will be used for the output array.
