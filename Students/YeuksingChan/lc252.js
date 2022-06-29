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

const can_attend_all_appointments = (arr) => {
  arr.sort((a, b) => a.start - b.start);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].end > arr[j].start) {
        return false;
      }
    }
  }
  return true;
};

const can_attend_all_appointments2 = (arr) => {
  arr.sort((a, b) => a.start - b.start);
  let i = 0;
  while (i < arr.length - 1) {
    let j = i + 1;
    while (j < arr.length) {
      if (arr[i].end > arr[j].start) {
        return false;
      }
      j++;
    }
    i++;
  }
  return true;
};

console.log(
  `Can attend all appointments: ${can_attend_all_appointments2([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
  ])}`
);
// [1,4] [2,5] [7,9]  arrLength: 3, lastInterval: 2, currentIndex : 0
// [1,4] [2,5] [7,9]  4 ?> 2 yes -> FALSE
// Expected: false, Output: false

console.log(
  `Can attend all appointments: ${can_attend_all_appointments2([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
  ])}`
); // Expected: true, Output: true

console.log(
  `Can attend all appointments: ${can_attend_all_appointments2([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
  ])}`
); // Expected: false, Output: false
