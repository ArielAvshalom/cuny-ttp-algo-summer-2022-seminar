// Problem Statement #

// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.

using namespace std;

#include <iostream>
#include <vector>

class FindAllDuplicate {
 public:
  static vector<int> findNumbers(vector<int> &nums) {
    vector<int> duplicateNumbers;
    // TODO: Write your code here
    return duplicateNumbers;
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
  vector<int> v1 = {3, 4, 4, 5, 5};
  vector<int> duplicates = FindAllDuplicate::findNumbers(v1);
  cout << "Duplicates are: ";
  for (auto num : duplicates) {
    cout << num << " ";
  }
  cout << endl;

  v1 = {5, 4, 7, 2, 3, 5, 3};
  duplicates = FindAllDuplicate::findNumbers(v1);
  cout << "Duplicates are: ";
  for (auto num : duplicates) {
    cout << num << " ";
  }
  cout << endl;
}



// Solution
// -----
// class FindAllDuplicate {
//  public:
//   static vector<int> findNumbers(vector<int> &nums) {
//     int i = 0;
//     while (i < nums.size()) {
//       if (nums[i] != nums[nums[i] - 1]) {
//         swap(nums, i, nums[i] - 1);
//       } else {
//         i++;
//       }
//     }

//     vector<int> duplicateNumbers;
//     for (i = 0; i < nums.size(); i++) {
//       if (nums[i] != i + 1) {
//         duplicateNumbers.push_back(nums[i]);
//       }
//     }

//     return duplicateNumbers;
//   }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n).

// Space complexity #
// Ignoring the space required for storing the duplicates, the algorithm runs in constant space O(1).
