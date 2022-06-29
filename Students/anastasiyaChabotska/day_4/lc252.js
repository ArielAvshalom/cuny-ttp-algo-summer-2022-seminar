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


// //for loop
// const can_attend_all_appointments = function(intervals){

//   //first sort the intervals by start time
//   intervals.sort((a, b)=>a.start - b.start);



//   for (let i=0; i < intervals.length - 1; i++){

//     if(intervals[i+1].start < intervals[i].end) return false;


//   }

//   return true;


// }

//while loop
const can_attend_all_appointments = function(intervals){

  intervals.sort((a,b)=>a.start - b.start);

  let index = 0;
  let endIndex = intervals.length - 1;
  
  while (index < endIndex){
    if (intervals[index + 1].start < intervals[index].end) return false;

    index++;
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

