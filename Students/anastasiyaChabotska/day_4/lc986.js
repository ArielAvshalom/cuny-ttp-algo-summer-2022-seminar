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

  
  //maybe make a new list of the 2 intervals together, sort
  //then do regular merging if intersection

      //itearate the intervals
      for (let i=0; i< intervals_a.length; i++){
        
        let tempMerge = intervals_a[i];
        for (let j=0; j <intervals_b.length; j++){
             
            if (tempMerge.end >= intervals_b[j].start){
                tempMerge = my_merge(tempMerge, intervals_b[j]);
                result.push(tempMerge);
            }
            
            else continue;
            
        }
     
       
        
    }
    
    return result;
  
};

var my_merge = function(interval1, interval2){
  return new Interval (Math.max(interval1.start, interval2.start), Math.min(interval1.end, interval2.end));
}

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

