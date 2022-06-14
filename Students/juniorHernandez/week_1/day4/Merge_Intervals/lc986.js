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
  
  for (let elem of intervals_a) {
    let start = elem.start;
    let end = elem.end;

    for (let i = 0; i < intervals_b.length; ++i) {
      if (
        (start > intervals_b[i].start && start < intervals_b[i].end) ||
        (end > intervals_b[i].start && end < intervals_b[i].end)
      ) {
        //the elements of the interval_a is in between the element of interval_b, add it to the results
        let merged = new Interval(start, intervals_b[i].end);
        result.push(merged);
        //result.push(intervals_b[i]);
        merged.print_interval()
      }
    }
  }

  //console.log(result);

  return result;
};

process.stdout.write("Intervals Intersection: ");
let result = merge(
  [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
  [new Interval(2, 3), new Interval(5, 7)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();


/**
 * [1 2 3]
 *         } => [2,3]
 *   [2 3]
 * 
 * 1 2 3 4 [5 6]
 *                } => [5,7]
 * 1 2 3 4 [5 6 7]
 * 
 *         [5 6 7]
 *                    }=> [5,9]
 * 1 2 3 4 5 6 [7 8 9]
 * 
 * /// [[2,3] , [5,9]]
 * 
 */

// process.stdout.write("Intervals Intersection: ");
// result = merge(
//   [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
//   [new Interval(5, 10)]
// );
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();
