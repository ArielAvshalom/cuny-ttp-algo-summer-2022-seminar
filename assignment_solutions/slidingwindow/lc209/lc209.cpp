// Problem Statement #

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

using namespace std;

#include <iostream>
#include <limits>
#include <vector>

class MinSizeSubArraySum {
 public:
  static int findMinSubArray(int S, const vector<int>& arr) {
    // TODO: Write code here
  }
};

int main(int argc, char* argv[]) {
  int result = MinSizeSubArraySum::findMinSubArray(7, vector<int>{2, 1, 5, 2, 3, 2});
  cout << "Smallest subarray length: " << result << endl;
  result = MinSizeSubArraySum::findMinSubArray(7, vector<int>{2, 1, 5, 2, 8});
  cout << "Smallest subarray length: " << result << endl;
  result = MinSizeSubArraySum::findMinSubArray(8, vector<int>{3, 4, 1, 1, 6});
  cout << "Smallest subarray length: " << result << endl;
}







    // Solution
    // -----
    // int windowSum = 0, minLength = numeric_limits<int>::max();
    // int windowStart = 0;
    // for (int windowEnd = 0; windowEnd < arr.size(); windowEnd++) {
    //   windowSum += arr[windowEnd];  // add the next element
    //   // shrink the window as small as possible until the 'windowSum' is smaller than 'S'
    //   while (windowSum >= S) {
    //     minLength = min(minLength, windowEnd - windowStart + 1);
    //     windowSum -= arr[windowStart];  // subtract the element going out
    //     windowStart++;                  // slide the window ahead
    //   }
    // }

    // return minLength == numeric_limits<int>::max() ? 0 : minLength;
