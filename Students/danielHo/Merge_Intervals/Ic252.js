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

    // Sort by start value
    // Iterate until the second to last with a loop
    // Compare i and i + 1
    // If the end of i is greater than the start of i + 1 we return false
    // Else pass
    // After the loop if there was no false, then return true

    // While loop approach
    // const can_attend_all_appointments = function(intervals) {
    //     const arrLength = intervals.length;
    //     intervals.sort((a, b) => a.start - b.start); // Sorting the intervals by the starting value

    //     const lastInterval = arrLength - 1; // Second to last interval
    //     let currentIndex = 0;

    //     while (currentIndex < lastInterval) {
    //         // Compare the end of i with the start of i + 1
    //         if (intervals[currentIndex].end > intervals[currentIndex + 1].start) return false

    //         currentIndex++;
    //     }

    //     return true;
    // }

    // For loop approach
    const can_attend_all_appointments = function(intervals) {
        const arrLength = intervals.length;
        intervals.sort((a, b) => a.start - b.start); // Sorting the intervals by the starting value

        for (let i = 0; i < intervals.length - 1; i++) {
            if (intervals[i].end > intervals[i + 1].start) return false;
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