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

function can_attend_all_appointments(arr) {

  // for (let i = 0; i < arr.length; ++i) {
  //   if(arr[i+1] !== undefined){
  //     if((arr[i].start >= arr[i+1].start && arr[i].start <= arr[i+1].end) || (arr[i].end >= arr[i+1].start && arr[i].end <= arr[i+1].end)) // if the prev start or end is in between or equal to the next one's start or end
  //       return free=false;
  //   }
  // }

  let i=0;

  while(i<arr.length){
    if (arr[i + 1] !== undefined) {
      if (
        (arr[i].start >= arr[i + 1].start && arr[i].start <= arr[i + 1].end) ||
        (arr[i].end >= arr[i + 1].start && arr[i].end <= arr[i + 1].end)
      )
        // if the prev start or end is in between or equal to the next one's start or end
        return (free = false);
    }
    if(arr[i+1 === undefined])
      return free;
    ++i;
  }

  return free;
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
