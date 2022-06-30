// Problem Statement #

// Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

// Example 1:

// Input: nums=[1, 2, -1, 3, 5], k = 2
// Output: [1.5, 0.5, 1.0, 4.0]
// Explanation: Lets consider all windows of size ‘2’:

//   - [1, 2, -1, 3, 5] -> median is 1.5
//   - [1, 2, -1, 3, 5] -> median is 0.5
//   - [1, 2, -1, 3, 5] -> median is 1.0
//   - [1, 2, -1, 3, 5] -> median is 4.0

// Example 2:

// Input: nums=[1, 2, -1, 3, 5], k = 3
// Output: [1.0, 2.0, 3.0]
// Explanation: Lets consider all windows of size ‘3’:

//   - [1, 2, -1, 3, 5] -> median is 1.0
//   - [1, 2, -1, 3, 5] -> median is 2.0
//   - [1, 2, -1, 3, 5] -> median is 3.0

using namespace std;

#include <algorithm>
#include <iostream>
#include <queue>
#include <vector>

class SlidingWindowMedian {
 public:
  virtual vector<double> findSlidingWindowMedian(const vector<int> &nums, int k) {
    vector<double> result(nums.size() - k + 1);
    // TODO: Write your code here
    return result;
  }
};

int main(int argc, char *argv[]) {
  SlidingWindowMedian slidingWindowMedian;
  vector<double> result =
      slidingWindowMedian.findSlidingWindowMedian(vector<int>{1, 2, -1, 3, 5}, 2);
  cout << "Sliding window medians are: ";
  for (auto num : result) {
    cout << num << " ";
  }
  cout << endl;

  slidingWindowMedian = SlidingWindowMedian();
  result = slidingWindowMedian.findSlidingWindowMedian(vector<int>{1, 2, -1, 3, 5}, 3);
  cout << "Sliding window medians are: ";
  for (auto num : result) {
    cout << num << " ";
  }
}
