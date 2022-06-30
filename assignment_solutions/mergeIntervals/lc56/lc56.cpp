// Problem Statement #

// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

using namespace std;

#include <algorithm>
#include <iostream>
#include <vector>

class Interval {
 public:
  int start = 0;
  int end = 0;

  Interval(int start, int end) {
    this->start = start;
    this->end = end;
  }
};

class MergeIntervals {
 public:
  static vector<Interval> merge(vector<Interval> &intervals) {
    vector<Interval> mergedIntervals;
    // TODO: Write your code here
    return mergedIntervals;
  }
};

int main(int argc, char *argv[]) {
  vector<Interval> input = {{1, 3}, {2, 5}, {7, 9}};
  cout << "Merged intervals: ";
  for (auto interval : MergeIntervals::merge(input)) {
    cout << "[" << interval.start << "," << interval.end << "] ";
  }
  cout << endl;

  input = {{6, 7}, {2, 4}, {5, 9}};
  cout << "Merged intervals: ";
  for (auto interval : MergeIntervals::merge(input)) {
    cout << "[" << interval.start << "," << interval.end << "] ";
  }
  cout << endl;

  input = {{1, 4}, {2, 6}, {3, 5}};
  cout << "Merged intervals: ";
  for (auto interval : MergeIntervals::merge(input)) {
    cout << "[" << interval.start << "," << interval.end << "] ";
  }
  cout << endl;
}




// Solution
// -----
// class MergeIntervals {
//  public:
//   static vector<Interval> merge(vector<Interval> &intervals) {
//     if (intervals.size() < 2) {
//       return intervals;
//     }

//     // sort the intervals by start time
//     sort(intervals.begin(), intervals.end(),
//          [](const Interval &x, const Interval &y) { return x.start < y.start; });

//     vector<Interval> mergedIntervals;

//     vector<Interval>::const_iterator intervalItr = intervals.begin();
//     Interval interval = *intervalItr++;
//     int start = interval.start;
//     int end = interval.end;
//     while (intervalItr != intervals.end()) {
//       interval = *intervalItr++;
//       if (interval.start <= end) {  // overlapping intervals, adjust the 'end'
//         end = max(interval.end, end);
//       } else {  // non-overlapping interval, add the previous interval and reset
//         mergedIntervals.push_back({start, end});
//         start = interval.start;
//         end = interval.end;
//       }
//     }
//     // add the last interval
//     mergedIntervals.push_back({start, end});
//     return mergedIntervals;
//   }
// };

// -----

// Time complexity #
// The time complexity of the above algorithm is O(N * logN), where ‘N’ is the total number of intervals. We are iterating the intervals only once which will take O(N), in the beginning though, since we need to sort the intervals, our algorithm will take O(N * logN).

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing all the merged intervals. We will also need O(N) space for sorting. For Java, depending on its version, Collections.sort() either uses Merge sort or Timsort, and both these algorithms need O(N) space. Overall, our algorithm has a space complexity of O(N).
