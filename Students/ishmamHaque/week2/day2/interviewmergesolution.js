//First I show my failed solution then the actual solution
// Problem Statement #
 
// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
 
//class Interval {
//  constructor(start, end) {
//    this.start = start;
//    this.end = end;
//  }
 
//  get_interval() {
//    return "[" + this.start + ", " + this.end + "]";
//  }
//}
 
//const merge = function (intervals) {
 // merged = [];
  // TODO: Write your code here
//  const arraylength=intervals.length;
//  let index=0;
//  intervals.sort((a,b)=>a.start-b.start);
//  while(index<arraylength){
//   if(index<arraylength-1) merged.push(intervals[index]);
//   else if(intervals[index].end>intervals[index+1].start){
//     merged.push(new Interval(Math.min(intervals[index].start,intervals[index+1].start),Math.max(intervals[index].end,intervals[index+1].end)));
//     index=index+2;
//    }
//    else{
//     merged.push(intervals[index]);
//     index=index+1;
//    }
//  }
//  return merged;
//};
// Solution
// -----
 function merge(intervals) {
   if (intervals.length < 2) {
     return intervals;
   }
//   // sort the intervals on the start time
   intervals.sort((a, b) => a.start - b.start);
   const mergedIntervals = [];
   let start = intervals[0].start,
     end = intervals[0].end;
   for (i = 1; i < intervals.length; i++) {
     const interval = intervals[i];
     if (interval.start <= end) { // overlapping intervals, adjust the 'end'
       end = Math.max(interval.end, end);
     } else { // non-overlapping interval, add the previous interval and reset
       mergedIntervals.push(new Interval(start, end));
       start = interval.start;
       end = interval.end;
     }
   }
//   // add the last interval
   mergedIntervals.push(new Interval(start, end));
   return mergedIntervals;
}
merged_intervals = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);
 
merged_intervals = merge([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(5, 9),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);
 
merged_intervals = merge([
  new Interval(1, 4),
  new Interval(2, 6),
  new Interval(3, 5),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);
