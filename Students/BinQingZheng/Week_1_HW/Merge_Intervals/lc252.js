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
  //Function to check if there is a over-lapping appointment, for-loop solution 
  const can_attend_all_appointments = function (intervals) {
    if (intervals.length <2) {
      return true;  
    }
    
    //sort the intervals by start time of appointments
    intervals.sort((a, b) => a. start - b.start);

    let start = intervals[0].start,
      end =intervals[0].end;
    for (let i = 1; i < intervals.length; i++) {
      const interval = intervals[i];
      if (interval.start <= end) { // if there is two overlapping appointments, return false for can't attend all appointments
        return false;
      } else { //non-overlapping interval, reset the start and end with current ith non-overlapping appointment's start and end times, continue checking the next appointment interval
        start = interval.start;
        end = interval.end;
      }
    }
    // no overlapping appointment found in the array
    return true;
  };

  //Function to check if there is a over-lapping appointment, while-loop solution 
  const can_attend_all_appointments_while = function (intervals) {
    if (intervals.length <2) {
      return true;  
    }
    
    //sort the intervals by start time of appointments
    intervals.sort((a, b) => a. start - b.start);

    let start = intervals[0].start,
      end =intervals[0].end;
    let i = 1;
    while (i < intervals.length) {
      const interval = intervals[i];
      if (interval.start <= end) { // if there is two overlapping appointments, return false for can't attend all appointments
        return false;
      } else { //non-overlapping interval, reset the start and end with the current ith non-overlapping appointment's start and end times, continue checking the next appointment interval
        start = interval.start;
        end = interval.end;
        i += 1;
      }
    }
    // no overlapping appointment found in the array
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
  
  console.log(`Can attend all appointments: ${can_attend_all_appointments_while([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
  ])}`);
  // [1,4] [2,5] [7,9]  arrLength: 3, lastInterval: 2, currentIndex : 0
  // [1,4] [2,5] [7,9]  4 ?> 2 yes -> FALSE
  // Expected: false, Output: false
  
  console.log(`Can attend all appointments: ${can_attend_all_appointments_while([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
  ])}`);// Expected: true, Output: true
  
  console.log(`Can attend all appointments: ${can_attend_all_appointments_while([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
  ])}`); // Expected: false, Output: false
  