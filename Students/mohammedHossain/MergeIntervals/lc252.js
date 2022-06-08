// Problem Statement #

// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.
//*******************
//For this problem, give two solutions, one with a for loop and one with a while loop
//*******************
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

// i.e write a function that returns false if there are
// overlapping intervals
function can_attend_all_appointments(intervals) {
  // there can be no overlap if less than 2 appointments
  if (intervals.length < 2) return true;

  // sort intervals
  intervals.sort((a, b) => a.start - b.start);

  // --- FOR LOOP SOLUTION ---- //
  let lastInterval = intervals[0];
  // we start at 1, and compare with lastInterval as we update i and lastInteral
  for (let i = 1; i < intervals.length; i++) {
    // if "they overlap"
    if (lastInterval.end >= intervals[i].start) return false;
    lastInterval = intervals[i];
  }
  // --- FOR LOOP SOLUTION ---- //

  // --- WYHILE LOOP SOLUTION ---- //
  // let i = 0;
  // while (i + 1 < intervals.length && intervals[i].end < intervals[i + 1].start)
  //   i++;
  // return i + 1 >= intervals.length || intervals[i].end < intervals[i + 1].start;
  // --- for LOOP SOLUTION ---- //

  return true;
}

console.log(
  `Can attend all appointments: ${can_attend_all_appointments([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
  ])}`
);
// [1,4] [2,5] [7,9]  arrLength: 3, lastInterval: 2, currentIndex : 0
// [1,4] [2,5] [7,9]  4 ?> 2 yes -> FALSE
// Expected: false, Output: false

console.log(
  `Can attend all appointments: ${can_attend_all_appointments([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
  ])}`
); // Expected: true, Output: true

console.log(
  `Can attend all appointments: ${can_attend_all_appointments([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
  ])}`
); // Expected: false, Output: false
