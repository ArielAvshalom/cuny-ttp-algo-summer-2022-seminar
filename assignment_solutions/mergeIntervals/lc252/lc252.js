// Problem Statement #

// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

// Precondition:
// Intervals: an array of Intervals that represent appointment Times
// Post condition:
// canAttendAll: boolean -> The intervals array has no intersecting intervals and the person can attend all appointments

// Sort the interval array by their start value
// Iterate until the second to last element of the array
// Make a comparison of the i and i+1 interval
// Comparison: if intervals[i].end > intervals[i+1].start  RETURN false -> we found an intersecting interval
// After loop-> we mad it to last interval, then we return true be default because we haven't found any intersecting interval

const can_attend_all_appointments = function(intervals) {

  const arrLength = intervals.length;
  if(arrLength === 1) return true;
  intervals.sort((a, b) => a.start - b.start); // Sort all the intervals by their start value
  const lastInterval = arrLength - 1; // Last interval that i will make it to
  let currentIndex = 0; // our i index

  while(currentIndex < lastInterval){
    if (intervals[currentIndex].end > intervals[currentIndex+1].start) return false; // Checks if there are intersecting invervals
    currentIndex++;
  }
  // No intersecting intervals if the while-loop terminates
  return true;
};


console.log(`Can attend all appointments: ${can_attend_all_appointments([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
])}`);
// [1,4] [2,5] [7,9]  arrLength: 3, lastInterval: 2, currentIndex : 0
// [1,4] [2,5] [7,9]  4 ?> 2 yes -> FALSE
// Expected: false, Output: false

console.log(`Can attend all appointments: ${can_attend_all_appointments([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(8, 12),
])}`);// Expected: true, Output: true

console.log(`Can attend all appointments: ${can_attend_all_appointments([
  new Interval(4, 5),
  new Interval(2, 3),
  new Interval(3, 6),
])}`); // Expected: false, Output: false



// Solution
// -----
// function can_attend_all_appointments(intervals) {
//   intervals.sort((a, b) => a.start - b.start);
//   for (i = 1; i < intervals.length; i++) {
//     if (intervals[i].start < intervals[i - 1].end) {
//       // please note the comparison above, it is "<" and not "<="
//       // while merging we needed "<=" comparison, as we will be merging the two
//       // intervals having condition "intervals[i][start] === intervals[i - 1][end]" but
//       // such intervals don't represent conflicting appointments as one starts right
//       // after the other
//       return false;
//     }
//   }
//   return true;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(N*logN), where ‘N’ is the total number of appointments. Though we are iterating the intervals only once, our algorithm will take O(N * logN) since we need to sort them in the beginning.

// Space complexity #
// The space complexity of the above algorithm will be O(N), which we need for sorting. For Java, Arrays.sort() uses Timsort, which needs O(N) space.
