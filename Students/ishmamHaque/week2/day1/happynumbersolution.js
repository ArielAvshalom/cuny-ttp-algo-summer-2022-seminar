
// Problem Statement #

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
const find_happy_number = function(num) {
  // TODO: Write your code here
  if(num==1) return true;
  hare=num;
  tortoise=num;
  alt1=num;
  answer1=0;
  while(alt1!=0){
    cat=alt1%10;
    answer1=answer1+cat*cat;
    alt1=parseInt(alt1/10);
  }
  hare=answer1;
  while(tortoise!=hare){
    answer2=0;
    alt2=hare;
   while(alt2!=0){
     cat2=alt2%10;
     answer2=answer2+cat2*cat2;
     alt2=parseInt(alt2/10);
   }
   alt3=answer2;
   answer2=0;
   while(alt3!=0){
     cat3=alt3%10;
     answer2=answer2+cat3*cat3;
     alt3=parseInt(alt3/10);
   }
   hare=answer2;
   alt4=tortoise;
   answer3=0;
   while(alt4!=0){
     cat4=alt4%10;
     answer3=answer3+cat4*cat4;
     alt4=parseInt(alt4/10);
   }
   tortoise=answer3;
  }
  if(tortoise==1) return true;
  else return false;
};
console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)
