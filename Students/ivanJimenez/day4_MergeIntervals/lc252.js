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

/*
const can_attend_all_appointments = function(appointments){
  if (appointments.length < 2) {
    return true;
  }
  // sort the intervals on the start time
  appointments.sort((a, b) => a.start - b.start);

  let start = appointments[0].start, end = appointments[0].end;
  for (i = 1; i < appointments.length; i++) {
    const interval = appointments[i];
    if (interval.start <= end) { // overlapping intervals, adjust the 'end'
      return false;
    }
    else { // non-overlapping interval, add the previous interval and reset
      start = interval.start;
      end = interval.end;
    }
  }

  return true;
}
*/

const can_attend_all_appointments = function(appointments){
  if (appointments.length < 2) {
    return true;
  }
  // sort the intervals on the start time
  appointments.sort((a, b) => a.start - b.start);

  let i = 1;
  let start = appointments[0].start, end = appointments[0].end;
  while(i < appointments.length){
    const interval = appointments[i];
    if (interval.start <= end) { // overlapping intervals, adjust the 'end'
      return false;
    }
    else { // non-overlapping interval, add the previous interval and reset
      start = interval.start;
      end = interval.end;
    }
    i++;
  }
  return true;
}


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

