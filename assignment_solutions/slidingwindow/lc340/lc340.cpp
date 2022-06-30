// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

using namespace std;

#include <iostream>
#include <string>
#include <unordered_map>

class LongestSubstringKDistinct {
 public:
  static int findLength(const string& str, int k) {
    int maxLength = 0;
    // TODO: Write your code here
    return maxLength;
  }
};


int main(int argc, char *argv[]) {
  cout << "Length of the longest substring: " << LongestSubstringKDistinct::findLength("araaci", 2)
       << endl;
  cout << "Length of the longest substring: " << LongestSubstringKDistinct::findLength("araaci", 1)
       << endl;
  cout << "Length of the longest substring: " << LongestSubstringKDistinct::findLength("cbbebi", 3)
       << endl;
}






// Solution
// -----
//     int windowStart = 0, maxLength = 0;
//     unordered_map<char, int> charFrequencyMap;
//     // in the following loop we'll try to extend the range [windowStart, windowEnd]
//     for (int windowEnd = 0; windowEnd < str.length(); windowEnd++) {
//       char rightChar = str[windowEnd];
//       charFrequencyMap[rightChar]++;
//       // shrink the sliding window, until we are left with 'k' distinct characters in the frequency
//       // map
//       while ((int)charFrequencyMap.size() > k) {
//         char leftChar = str[windowStart];
//         charFrequencyMap[leftChar]--;
//         if (charFrequencyMap[leftChar] == 0) {
//           charFrequencyMap.erase(leftChar);
//         }
//         windowStart++; // shrink the window
//       }
//       maxLength = max(maxLength, windowEnd - windowStart + 1); // remember the maximum length so far
//     }
