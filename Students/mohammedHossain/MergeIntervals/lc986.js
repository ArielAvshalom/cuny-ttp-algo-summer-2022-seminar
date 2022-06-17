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
  let res = [];

  let a_idx = 0,
    b_idx = 0;

  /*
   * We can keep indexes of a's and b's intervals, and check
   * if they overlap, if they do, we can take the sub-interval
   * for which they overlap and add that to our array.
   *
   * We increment our pointers a_idx or b_idx based on whichever end
   * is smaller, because that interval will definitely not overlap,
   * with the other's next interval.
   *
   * increment a_idx or b_idx, which ever is smaller
   */
  while (a_idx < intervals_a.length && b_idx < intervals_b.length) {
    const a = intervals_a[a_idx],
      b = intervals_b[b_idx];

    /*
     * Either the intervals:
     *    they overlap and a's interval extends longer
     * or they overlap and b's interval extends longer,
     * or they overlap and a is contained in b
     * or they overlap and b is contained in a
     * or they don't overlap,
     */
    const overlapping =
      (a.start >= b.start && a.start <= b.end) ||
      (b.start >= a.start && b.start <= a.end);

    if (overlapping) {
      const interval = new Interval(-1, -1);
      interval.start = Math.max(a.start, b.start);
      interval.end = Math.min(a.end, b.end);

      res.push(interval);
    }

    if (intervals_a[a_idx].end < intervals_b[b_idx].end) a_idx++;
    else b_idx++;
  }

  return res;
};

function printMergedIntervals(intervals_a, intervals_b) {
  process.stdout.write('Intervals Intersection: ');
  result = merge(intervals_a, intervals_b);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();
}

printMergedIntervals(
  [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
  [new Interval(2, 3), new Interval(5, 7)]
);

printMergedIntervals(
  [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
  [new Interval(5, 10)]
);

printMergedIntervals(
  [
    new Interval(0, 2),
    new Interval(5, 10),
    new Interval(13, 23),
    new Interval(24, 25),
  ],
  [
    new Interval(1, 5),
    new Interval(8, 12),
    new Interval(15, 24),
    new Interval(25, 26),
  ]
); // [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

printMergedIntervals([new Interval(1, 3), new Interval(5, 9)], []); // []
