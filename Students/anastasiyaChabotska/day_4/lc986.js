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


  /*solutions I thought of:

  maybe make a new list of the 2 intervals together, sort
  then do regular merging if intersection is found

  trying to loop through 2 intervals at the same time got me stuck most likely


  */



  

    //checked the logic, was not poroperly adding stuff to the results, failed to porperly check if there is an interval

      //iterate the intervals
      for (let i=0; i< intervals_a.length; i++){
        
        for (let j=0; j <intervals_b.length; j++){
        
                let tempMerge = my_merge(intervals_a[i], intervals_b[j]);

                //if it's an interval
                if(tempMerge.start <= tempMerge.end)
                result.push(tempMerge);

              
            
            
            
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

