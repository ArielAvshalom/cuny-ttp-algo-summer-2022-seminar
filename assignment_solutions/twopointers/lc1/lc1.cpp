// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

using namespace std;

#include <iostream>
#include <vector>

class PairWithTargetSum {
public:
  static pair<int, int> search(const vector<int> &arr, int targetSum) {

  }
};

int main(int argc, char *argv[]) {
  auto result = PairWithTargetSum::search(vector<int>{1, 2, 3, 4, 6}, 6);
  cout << "Pair with target sum: [" << result.first << ", " << result.second << "]" << endl;
  result = PairWithTargetSum::search(vector<int>{2, 5, 9, 11}, 11);
  cout << "Pair with target sum: [" << result.first << ", " << result.second << "]" << endl;
}












// Solution
// -----
//     int left = 0, right = arr.size() - 1;
//     while (left < right) {
//       int currentSum = arr[left] + arr[right];
//       if (currentSum == targetSum) { // found the pair
//         return make_pair(left, right);
//       }

//       if (targetSum > currentSum)
//         left++; // we need a pair with a bigger sum
//       else
//         right--; // we need a pair with a smaller sum
//     }
//     return make_pair(-1, -1);
