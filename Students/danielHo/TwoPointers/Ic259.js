// Problem Statement #

// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

// Returning the number of triplets whose sum is less than target
const triplet_with_smaller_sum = function(arr, target) {
    // TODO: Write your code here
    let count = 0;
    
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 2; i++) {
        // Exit loop if value is greater than sum
        if (arr[i] > target) break;

        let j = i + 1;
        let k = arr.length - 1;

        while (j < k) {
            // Add up the three values of the current indices
            const sum = arr[i] + arr[j] + arr[k];
            console.log(i, j, k)
            console.log(sum)

            // Increment count if sum is less than target
            if (sum < target) count++;
        
            else if (sum > target) k--;
            
            else j++;
            
            console.log(count);
        }
        
    }

    return count;
  };
  
  console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
  console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));