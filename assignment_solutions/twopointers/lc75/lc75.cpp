// Problem Statement #

// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

using namespace std;

#include <iostream>
#include <vector>

class DutchFlag {
 public:
  static void sort(vector<int> &arr) {
    // TODO: Write your code here
  }
};

int main(int argc, char *argv[]) {
  vector<int> arr = {1, 0, 2, 1, 0};
  DutchFlag::sort(arr);
  for (auto num : arr) {
    cout << num << " ";
  }
  cout << endl;

  arr = vector<int>{2, 2, 0, 1, 2, 0};
  DutchFlag::sort(arr);
  for (auto num : arr) {
    cout << num << " ";
  }
}








// Solution
// -----
// class DutchFlag {
//  public:
//   static void sort(vector<int> &arr) {
//     // all elements < low are 0 and all elements > high are 2
//     // all elements from >= low < i are 1
//     int low = 0, high = arr.size() - 1;
//     for (int i = 0; i <= high;) {
//       if (arr[i] == 0) {
//         swap(arr, i, low);
//         i++;
//         low++;
//       } else if (arr[i] == 1) {
//         i++;
//       } else {  // the case for arr[i] == 2
//         swap(arr, i, high);
//         // decrement 'high' only, after the swap the number at index 'i' could be 0, 1 or 2
//         high--;
//       }
//     }
//   }

//  private:
//   static void swap(vector<int> &arr, int i, int j) {
//     int temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
// };

// -----

// Time complexity #
// The time complexity of the above algorithm will be O(N) as we are iterating the input array only once.

// Space complexity #
// The algorithm runs in constant space O(1).
