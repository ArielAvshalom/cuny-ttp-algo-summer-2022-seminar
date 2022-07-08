// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

using namespace std;

#include <iostream>
#include <vector>

class RemoveDuplicates {
 public:
  static int remove(vector<int>& arr) {
    // TODO: Write your code here
    return -1;
  }
};

int main(int argc, char* argv[]) {
  vector<int> arr = {2, 3, 3, 3, 6, 9, 9};
  cout << "Array new length: " << RemoveDuplicates::remove(arr) << endl;

  arr = vector<int>{2, 2, 2, 11};
  cout << "Array new length: " << RemoveDuplicates::remove(arr) << endl;
}

// Solution
// -----
//     int nextNonDuplicate = 1;  // index of the next non-duplicate element
//     for (int i = 1; i < arr.size(); i++) {
//       if (arr[nextNonDuplicate - 1] != arr[i]) {
//         arr[nextNonDuplicate] = arr[i];
//         nextNonDuplicate++;
//       }
//     }

//     return nextNonDuplicate;

// -----

// Time Complexity #
// The time complexity of the above algorithm will be O(N), where ‘N’ is the total number of elements in the given array.

// Space Complexity #
// The algorithm runs in constant space O(1).
