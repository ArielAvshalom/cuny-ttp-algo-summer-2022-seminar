// Problem Statement #

// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

using namespace std;

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

class InsertInterval {
 public:
  static vector<Interval> insert(const vector<Interval> &intervals, Interval newInterval) {
    vector<Interval> mergedIntervals;
    // TODO: Write your code here
    return mergedIntervals;
  }
};

int main(int argc, char *argv[]) {
  vector<Interval> input = {{1, 3}, {5, 7}, {8, 12}};
  cout << "Intervals after inserting the new interval: ";
  for (auto interval : InsertInterval::insert(input, {4, 6})) {
    cout << "[" << interval.start << "," << interval.end << "] ";
  }
  cout << endl;

  cout << "Intervals after inserting the new interval: ";
  for (auto interval : InsertInterval::insert(input, {4, 10})) {
    cout << "[" << interval.start << "," << interval.end << "] ";
  }
  cout << endl;

  input = {{2, 3}, {5, 7}};
  cout << "Intervals after inserting the new interval: ";
  for (auto interval : InsertInterval::insert(input, {1, 4})) {
    cout << "[" << interval.start << "," << interval.end << "] ";
  }
  cout << endl;
}



// Solution
// -----
// class InsertInterval {
//  public:
//   static vector<Interval> insert(const vector<Interval> &intervals, Interval newInterval) {
//     if (intervals.empty()) {
//       return vector<Interval>{newInterval};
//     }

//     vector<Interval> mergedIntervals;

//     int i = 0;
//     // skip (and add to output) all intervals that come before the 'newInterval'
//     while (i < intervals.size() && intervals[i].end < newInterval.start) {
//       mergedIntervals.push_back(intervals[i++]);
//     }

//     // merge all intervals that overlap with 'newInterval'
//     while (i < intervals.size() && intervals[i].start <= newInterval.end) {
//       newInterval.start = min(intervals[i].start, newInterval.start);
//       newInterval.end = max(intervals[i].end, newInterval.end);
//       i++;
//     }

//     // insert the newInterval
//     mergedIntervals.push_back(newInterval);

//     // add all the remaining intervals to the output
//     while (i < intervals.size()) {
//       mergedIntervals.push_back(intervals[i++]);
//     }

//     return mergedIntervals;
//   }
// };

// -----

// Time complexity #
// As we are iterating through all the intervals only once, the time complexity of the above algorithm is O(N), where ‘N’ is the total number of intervals.

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing all the merged intervals.
