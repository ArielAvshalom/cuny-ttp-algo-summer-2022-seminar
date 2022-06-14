// Problem Statement #

// Given two lists of intervals, find the intersection of these two lists. 
// Each list consists of disjoint intervals sorted on their start time.

class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    print_interval() {
      process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}
  
const merge = function(intervals_a, intervals_b) {
    let result = [];
    if (intervals_a.length == 0 || intervals_b.length == 0) {
        return result;
    }

    let a = 0, // pointer for intervlas_a 
        b = 0; //pointer for intervals_b
    while (a < intervals_a.length && b < intervals_b.length) {
        if (intervals_b[b].start <= intervals_a[a].end && intervals_a[a].start <= intervals_b[b].end ) {
            const maxStart = Math.max(intervals_a[a].start, intervals_b[b].start);
            const minEnd = Math.min(intervals_a[a].end, intervals_b[b].end);
            result.push([maxStart, minEnd]);
        }
        // increment a, b pointers depending on which end point of the two intervals is smaller
        if(intervals_a[a].end < intervals_b[b].end) {
            a++
        } else {
            b++
        }
    }
    return result;
  };
  
  process.stdout.write('Intervals Intersection: ');
  let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();
  
  
  process.stdout.write('Intervals Intersection: ');
  result = merge([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)], [new Interval(5, 10)]);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();
  

  

