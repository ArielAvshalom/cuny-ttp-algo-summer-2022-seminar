// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

function search_triplets(arr) {
    const triplets = [];
    if (arr.length < 3) {
        return triplets;
    } 
    arr.sort((a,b) => a-b);

    for (let i = 0; i <arr.length; i++) {
        if(arr[i] > 0) break;

        if ( i > 0 && arr[i] === arr[i-1]) {
            continue;
        }

        let low = i + 1, high = arr.length - 1;
        while (low < high) {
            const threeSum = arr[i] + arr[low] + arr[high];
            if (threeSum > 0) {
                high -= 1;
            }
            else if (threeSum < 0) {
                low += 1; 
            } else {
                triplets.push([arr[i], arr[low], arr[high]]);
                low += 1 ;
                high -= 1;
                while (arr[low] === arr[low-1] && low < high) {
                    low += 1;
                }
                while (arr[high] === arr[high+1] && low < high) {
                    high -= 1;
                }
            }
        } 
    }
    return triplets;
};

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2, 2]));
//expected output: [[-3, 1, 2], [-1, 0, 1], [-2, 0, 2]]
//during test runs, returns a incorrect output: [ [ -1, 0, 1 ], [ -2, 0, 2 ], [ -2, 1, 1 ], [ -3, 1, 2 ] ]

console.log(search_triplets([-5, 2, -1, -2, 3]));
console.log(search_triplets([-3, -3, 1, 2, 3, 4]));
console.log(search_triplets([3, 4]));


// Time complexity: 
// O(n*log n) + O(n^2) => O(n^2), because there were to two nested loops

// Space complexity = O(1)




  