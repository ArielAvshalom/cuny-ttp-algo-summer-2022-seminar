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

const merge = function (intervals_a, intervals_b) {
  let result = [];
  let i = 0;
  let j = 0;
  // TODO: Write your code here
  while ((i < intervals_a.length) & (j < intervals_b.length)) {
    if (intervals_a[i].start <= intervals_b[j].start) {
      if (intervals_a[i].end > intervals_b[j].start) {
        result.push([
          Math.max(intervals_a[i].start, intervals_b[j].start),
          Math.min(intervals_a[i].end, intervals_b[j].end),
        ]);
      }
    } else if (intervals_a[i].start > intervals_b[j].start) {
      if (intervals_a[i].end > intervals_b[j].start) {
        result.push([
          Math.max(intervals_a[i].start, intervals_b[j].start),
          Math.min(intervals_a[i].end, intervals_b[j].end),
        ]);
      }
    }
    // [7,9]   [2,6]
    if (intervals_a[i].end > intervals_b[j].end) {
      j++;
    } else {
      i++;
    }
  }
  return result;
};

process.stdout.write("Intervals Intersection: ");
let result = merge(
  [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
  [new Interval(2, 3), new Interval(5, 7)]
);
for (i = 0; i < result.length; i++) {
  console.log(result[i]);
}
console.log();

process.stdout.write("Intervals Intersection: ");
result = merge(
  [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
  [new Interval(5, 10)]
);
for (i = 0; i < result.length; i++) {
  console.log(result[i]);
  // result[i].print_interval();
}
console.log();
