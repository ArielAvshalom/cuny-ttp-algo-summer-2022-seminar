// Problem Statement #

// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

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

class IntervalsIntersection {
 public:
  static vector<Interval> merge(const vector<Interval> &arr1, const vector<Interval> &arr2) {
    vector<Interval> result;
    // TODO: Write your code here
    return result;
  }
};

int main(int argc, char *argv[]) {
  vector<Interval> input1 = {{1, 3}, {5, 6}, {7, 9}};
  vector<Interval> input2 = {{2, 3}, {5, 7}};
  vector<Interval> result = IntervalsIntersection::merge(input1, input2);
  cout << "Intervals Intersection: ";
  for (auto interval : result) {
    cout << "[" << interval.start << "," << interval.end << "] ";
  }
  cout << endl;

  input1 = {{1, 3}, {5, 7}, {9, 12}};
  input2 = {{5, 10}};
  result = IntervalsIntersection::merge(input1, input2);
  cout << "Intervals Intersection: ";
  for (auto interval : result) {
    cout << "[" << interval.start << "," << interval.end << "] ";
  }
}

// Solution
// -----
// class IntervalsIntersection {
//  public:
//   static vector<Interval> merge(const vector<Interval> &arr1, const vector<Interval> &arr2) {
//     vector<Interval> result;
//     int i = 0, j = 0;
//     while (i < arr1.size() && j < arr2.size()) {
//       // check if the interval arr[i] intersects with arr2[j]
//       // check if one of the interval's start time lies within the other interval
//       if ((arr1[i].start >= arr2[j].start && arr1[i].start <= arr2[j].end) ||
//           (arr2[j].start >= arr1[i].start && arr2[j].start <= arr1[i].end)) {
//         // store the intersection part
//         result.push_back({max(arr1[i].start, arr2[j].start), min(arr1[i].end, arr2[j].end)});
//       }

//       // move next from the interval which is finishing first
//       if (arr1[i].end < arr2[j].end) {
//         i++;
//       } else {
//         j++;
//       }
//     }

//     return result;
//   }
// };

//   -----

// Time complexity #
// As we are iterating through both the lists once, the time complexity of the above algorithm is O(N + M), where ‘N’ and ‘M’ are the total number of intervals in the input arrays respectively.

// Space complexity #
// Ignoring the space needed for the result list, the algorithm runs in constant space O(1).
