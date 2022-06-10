// Problem Statement #

// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    print_interval() {
      process.stdout.write(`[${this.start}, ${this.end}]`);
    }
  }
  
  // Intersection of two intervals means to take all those intervals which are common to both of the initial intervals and store them into another list of intervals
  // Loop through both list of intervals
  // For each pairs in intervals_a and intervals_b 
  // Find which interval starts second
  // Find which interval ends first
  // If the start is before end then add to the new list
  // If the interval in intervals_a becomes the end, move onto the next interval
  // Else move the interval in intervals_b to the next
  const merge = function(intervals_a, intervals_b) {
    let result = [];
    // TODO: Write your code here
    let i = 0, j = 0;
    
    while (i < intervals_a.length && j < intervals_b.length) {
        let start = Math.max(intervals_a[i].start, intervals_b[j].start);
        let end = Math.min(intervals_a[i].end, intervals_b[j].end);

        if (start < end) result.push(new Interval(start, end));
        if (intervals_a[i].end == end) i++;
        else j++;
    }
    return result;
  };
  
  
  process.stdout.write('Intervals Intersection: ');
  let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();
  // [(2, 3), (5, 6)]


  process.stdout.write('Intervals Intersection: ');
  result = merge([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)], [new Interval(5, 10)]);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();
  // [(5, 7), (9, 10)]