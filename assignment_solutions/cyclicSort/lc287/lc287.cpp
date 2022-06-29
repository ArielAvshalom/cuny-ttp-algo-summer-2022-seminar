// Problem Statement #

// We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

using namespace std;

#include <iostream>
#include <vector>

class FindDuplicate {
 public:
  static int findNumber(vector<int> &nums) {
    // TODO: Write your code here
    return -1;
  }
};

private:
  static void swap(vector<int> &arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};

int main(int argc, char *argv[]) {
  vector<int> v1 = {1, 4, 4, 3, 2};
  cout << FindDuplicate::findNumber(v1) << endl;

  v1 = {2, 1, 3, 3, 5, 4};
  cout << FindDuplicate::findNumber(v1) << endl;

  v1 = {2, 4, 1, 4, 4};
  cout << FindDuplicate::findNumber(v1) << endl;
}



// Solution
// -----
// class FindDuplicate {
//  public:
//   static int findNumber(vector<int> &nums) {
//     int i = 0;
//     while (i < nums.size()) {
//       if (nums[i] != i + 1) {
//         if (nums[i] != nums[nums[i] - 1]) {
//           swap(nums, i, nums[i] - 1);
//         } else  // we have found the duplicate
//         {
//           return nums[i];
//         }
//       } else {
//         i++;
//       }
//     }

//     return -1;
//   }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n).

// Space complexity #
// The algorithm runs in constant space O(1) but modifies the input array.
