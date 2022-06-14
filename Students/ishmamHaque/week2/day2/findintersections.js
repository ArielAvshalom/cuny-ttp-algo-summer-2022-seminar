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

const merge = function(intervals_a, intervals_b) {
  let result = [];
  // TODO: Write your code here
  const lengtha=intervals_a.length;
  const lengthb=intervals_b.length;
  intervals_a.sort((a,b) => a.start-b.start);
  intervals_b.sort((a,b) => a.start-b.start);
  counter1=0;
  counter2=0;
  while(counter1<lengtha && counter2<lengthb){
   intervalstart = Math.max(intervals_a[counter1].start, intervals_b[counter2].start);
   intervalend = Math.min(intervals_a[counter1].end, intervals_b[counter2].end);
   if(intervalstart<=intervalend){
       result.push(new Interval(intervalstart,intervalend));
   }
   if(intervals_a[counter1].end<intervals_b[counter2].end) counter1++;
   else counter2++;
  }
  return result;
};

process.stdout.write('Intervals Intersection: ');
let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
