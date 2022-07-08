// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

function search_triplets(arr) {
    triplets = [];
    // TODO: Write your code here

    // The array dont have at least 3 values, return empty array
    if (arr.length < 3) return triplets;

    // Sort the array from smallest to biggest
    arr.sort((a, b) => a - b);

    // Looking for triplets that add up to 0
    let target = 0;

    for (let i = 0; i < arr.length - 2; i++) {
        // Exit loop if value is greater than target, 
        // since there is no way to add up bigger numbers to get a smaller value
        if (arr[i] > target) break

        // Skip the value, because we seen it already
        if (i > 0 && arr[i] == arr[i-1]) continue

        // Using the two pointers approach here
        let j = i + 1;
        let k = arr.length - 1;

        while (j < k) {
            // Add up the three values at the index
            let sum = arr[i] + arr[j] + arr[k];

            // If the sum is equal to the target
            // Add the three values as a triplet into the array
            if (sum === target) {
                triplets.push([arr[i], arr[j], arr[k]])

                // To avoid duplicates, we continue to increment j and decrement k
                // Skipping the values we already seen
                while (arr[j] === arr[j+1]) j++;
                while (arr[k] === arr[k-1]) k--;

                // Increment J and decrement k to the next unique value;
                j++;
                k--;
            } 
            // The sum is too small, increment j to the next value
            else if (sum < target) j++;

            // The sum is too big, decrement k to the next value
            else k--;
        }
    }

    return triplets;
  }
  
  console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
  console.log(search_triplets([-5, 2, -1, -2, 3]));
  