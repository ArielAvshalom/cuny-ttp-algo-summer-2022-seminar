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

/**
Returns true if the person attend all appointments
*/
can_attend_all_appointments = function(intervals)
{
  // Sort the array
  intervals.sort((a, b) => a.start - b.start);
  // Compare the intervals in order
  if (intervals.length > 1)
  {
    /* For loop implementation
    for (let interval = 0; interval < intervals.length - 1; interval++)
    {
      // If there's an overlap return false since it messes with
      // with another appointment said person has
      if (intervals[interval].end >= intervals[interval + 1].start)
        return false;
    }
    */
   
    // While loop implementation
    let interval = 0;
    while (interval < intervals.length - 1)
    {
      if (intervals[interval].end >= intervals[interval + 1].start)
        return false;
      interval++;
    }
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

