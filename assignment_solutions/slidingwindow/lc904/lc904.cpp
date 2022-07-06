// Problem Statement #

// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both baskets.

using namespace std;

#include <iostream>
#include <unordered_map>
#include <vector>



class MaxFruitCountOf2Types {
 public:
  static int findLength(const vector<char>& arr) {
    int maxLength = 0;
    // TODO: Write your code here
    return maxLength;
  }
};

int main(int argc, char* argv[]) {
  cout << "Maximum number of fruits: "
       << MaxFruitCountOf2Types::findLength(vector<char>{'A', 'B', 'C', 'A', 'C'}) << endl;
  cout << "Maximum number of fruits: "
       << MaxFruitCountOf2Types::findLength(vector<char>{'A', 'B', 'C', 'B', 'B', 'C'}) << endl;
}








// Solution
// -----
//     int windowStart = 0, maxLength = 0;
//     unordered_map<char, int> fruitFrequencyMap;
//     // try to extend the range [windowStart, windowEnd]
//     for (int windowEnd = 0; windowEnd < arr.size(); windowEnd++) {
//       fruitFrequencyMap[arr[windowEnd]]++;
//       // shrink the sliding window, until we are left with '2' fruits in the frequency map
//       while ((int)fruitFrequencyMap.size() > 2) {
//         fruitFrequencyMap[arr[windowStart]]--;
//         if (fruitFrequencyMap[arr[windowStart]] == 0) {
//           fruitFrequencyMap.erase(arr[windowStart]);
//         }
//         windowStart++;  // shrink the window
//       }
//       maxLength = max(maxLength, windowEnd - windowStart + 1);
//     }
