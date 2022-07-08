// Problem Statement #
// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

const triplet_sum_close_to_target = function (arr, target_sum) {
    // TODO: Write your code here

    // Initiate smallest difference (between target and sum) and smallest sum
    let sDifference = Infinity;
    let sSum = Infinity;


    arr.sort((a, b) => a - b); // Sorting is O(n log(n))
    
    // Using the twoSum algorithm
    for (let i = 0; i < arr.length - 2; i++) {

        let low = i + 1;
        let high = arr.length - 1;

        // Two pointers approach
        while (low < high) {
            
            // Add values of the current the indices
            const sum = arr[i] + arr[low] + arr[high];
            
            // Finding the difference between target and sum
            let diff = Math.abs(target_sum - sum);

            // Change the values if diff is less than smalllest Difference
            if (diff < sDifference) {
                sDifference = diff;
                sSum = sum;
            }

            // If the difference are the same, and sum is less than smallest sum,
            // reset sum
            if (diff === sDifference) {
                if (sum < sSum) sSum = sum;
            }

            // Continue searching in the array
            if (sum > target_sum) {
                high--;
            } else {
                low++;
            }
        }
    }

    return sSum;
  };
  
  console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2)); // -2 + 2 + 1
  // -2 0 1
  // -2 0 2
  // -2 1 2

  // 0 -2 1
  // 0 -2 2
  // 0 1 2

  // 1 -2 0
  // 1 -2 2
  // 1 0 2

  // 2 -2 0
  // 2 -2 1
  // 2 0 1

  console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1)); // -3 + 1 + 2
  console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100)); // 1 + 1 + 1