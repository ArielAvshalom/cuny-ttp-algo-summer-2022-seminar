// Problem Statement #

// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

using namespace std;

#include <algorithm>
#include <iostream>
#include <vector>

class Interval {
 public:
  int start;
  int end;

  Interval(int start, int end) {
    this->start = start;
    this->end = end;
  }
};

class ConflictingAppointments {
 public:
  static bool canAttendAllAppointments(vector<Interval>& intervals) {
    // TODO: Write your code here
    return true;
  }
};

int main(int argc, char* argv[]) {
  vector<Interval> intervals = {{1, 4}, {2, 5}, {7, 9}};
  bool result = ConflictingAppointments::canAttendAllAppointments(intervals);
  cout << "Can attend all appointments: " << result << endl;

  intervals = {{6, 7}, {2, 4}, {8, 12}};
  result = ConflictingAppointments::canAttendAllAppointments(intervals);
  cout << "Can attend all appointments: " << result << endl;

  intervals = {{4, 5}, {2, 3}, {3, 6}};
  result = ConflictingAppointments::canAttendAllAppointments(intervals);
  cout << "Can attend all appointments: " << result << endl;
}




// Solution
// -----
// class ConflictingAppointments {
//  public:
//   static bool canAttendAllAppointments(vector<Interval>& intervals) {
//     // sort the intervals by start time
//     sort(intervals.begin(), intervals.end(),
//          [](const Interval& x, const Interval& y) { return x.start < y.start; });

//     // find any overlapping appointment
//     for (int i = 1; i < intervals.size(); i++) {
//       if (intervals[i].start < intervals[i - 1].end) {
//         // please note the comparison above, it is "<" and not "<="
//         // while merging we needed "<=" comparison, as we will be merging the two
//         // intervals having condition "intervals[i].start == intervals[i - 1].end" but
//         // such intervals don't represent conflicting appointments as one starts right
//         // after the other
//         return false;
//       }
//     }
//     return true;
//   }
// };

// -----

// Time complexity #
// The time complexity of the above algorithm is O(N*logN), where ‘N’ is the total number of appointments. Though we are iterating the intervals only once, our algorithm will take O(N * logN) since we need to sort them in the beginning.

// Space complexity #
// The space complexity of the above algorithm will be O(N), which we need for sorting. For Java, Arrays.sort() uses Timsort, which needs O(N) space.
