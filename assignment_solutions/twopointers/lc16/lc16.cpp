// Problem Statement #
// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

using namespace std;

#include <algorithm>
#include <iostream>
#include <limits>
#include <vector>

class TripletSumCloseToTarget {
 public:
  static int searchTriplet(vector<int>& arr, int targetSum) {
    // TODO: Write your code here
    return -1;
  }
};


int main(int argc, char* argv[]) {
  vector<int> vec = {-2, 0, 1, 2};
  cout << TripletSumCloseToTarget::searchTriplet(vec, 2) << endl;
  vec = {-3, -1, 1, 2};
  cout << TripletSumCloseToTarget::searchTriplet(vec, 1) << endl;
  vec = {1, 0, 1, 1};
  cout << TripletSumCloseToTarget::searchTriplet(vec, 100) << endl;
}





// Solution
// -----
//     sort(arr.begin(), arr.end());
//     int smallestDifference = numeric_limits<int>::max();
//     for (int i = 0; i < arr.size() - 2; i++) {
//       int left = i + 1, right = arr.size() - 1;
//       while (left < right) {
//         // comparing the sum of three numbers to the 'targetSum' can cause overflow
//         // so, we will try to find a target difference
//         int targetDiff = targetSum - arr[i] - arr[left] - arr[right];
//         if (targetDiff == 0) {            //  we've found a triplet with an exact sum
//           return targetSum - targetDiff;  // return sum of all the numbers
//         }

//         if (abs(targetDiff) < abs(smallestDifference) ||
//               (abs(targetDiff) == abs(smallestDifference) && targetDiff > smallestDifference)) {
//           smallestDifference = targetDiff;  // save the closest difference
//         }

//         if (targetDiff > 0) {
//           left++;  // we need a triplet with a bigger sum
//         } else {
//           right--;  // we need a triplet with a smaller sum
//         }
//       }
//     }
//     return targetSum - smallestDifference;

// -----

// Time complexity #
// Sorting the array will take O(N* logN). Overall, the function will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).

// Space complexity #
// The above algorithm’s space complexity will be O(N), which is required for sorting.
