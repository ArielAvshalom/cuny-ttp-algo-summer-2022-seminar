// Problem Statement #

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

const find_happy_number = function(num) {
  let dictionary = {};
  while(true){
    let sum = 0;
    stringNumber = num.toString();
    numDigits = stringNumber.length;
    for(let i = 0; i < numDigits; i++){
      digit = stringNumber.charAt(i);
      sum += (digit * digit);
    }
    num = sum;
    if(sum === 1){
      return true;
    }
    else{
      if(!(sum in dictionary)){
        dictionary[sum] = 1;
      }
      else{
        return false;
      }
    }
  }
};

console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)

