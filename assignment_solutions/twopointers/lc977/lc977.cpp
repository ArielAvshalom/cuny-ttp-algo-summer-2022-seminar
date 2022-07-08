// Problem Statement #
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

using namespace std;

#include <iostream>
#include <vector>

class SortedArraySquares {
 public:
  static vector<int> makeSquares(const vector<int>& arr) {
    int n = arr.size();
    vector<int> squares(n);
    // TODO: Write code here
    return squares;
  }
};

int main(int argc, char* argv[]) {
  vector<int> result = SortedArraySquares::makeSquares(vector<int>{-2, -1, 0, 2, 3});
  for (auto num : result) {
    cout << num << " ";
  }
  cout << endl;

  result = SortedArraySquares::makeSquares(vector<int>{-3, -1, 0, 1, 2});
  for (auto num : result) {
    cout << num << " ";
  }
  cout << endl;
}


// Solution
// -----
//     int highestSquareIdx = n - 1;
//     int left = 0, right = n - 1;
//     while (left <= right) {
//       int leftSquare = arr[left] * arr[left];
//       int rightSquare = arr[right] * arr[right];
//       if (leftSquare > rightSquare) {
//         squares[highestSquareIdx--] = leftSquare;
//         left++;
//       } else {
//         squares[highestSquareIdx--] = rightSquare;
//         right--;
//       }
//     }

// -----

// Time complexity #
// The above algorithm’s time complexity will be O(N) as we are iterating the input array only once.

// Space complexity #
// The above algorithm’s space complexity will also be O(N); this space will be used for the output array.
