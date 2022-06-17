// Problem Statement #

// Any number will be called a happy number if, 
// after repeatedly replacing it with a number equal to the sum of the square of all of its digits, 
// leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. 
// Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

const find_happy_number = function(num) {
  let isHappy = false;

  let prevNum = num // we need to check if the number is growing. Growing mean its not happy
  while(true){
    if(prevNum < num || prevNum < 10) // If the num is larger than prev, is not happy. Since all single digit sqred is always bigger we know its not happy.
      break;
    prevNum = num; //we need to keep track of the previous number for the next interation check

    let indieNum = num.toString().split(''); // split all the number into char
    let arr = [...indieNum]; //put them in an array
    console.log(arr)
    let newNum=0
    for(let i=0; i<arr.length; ++i)
      newNum += Math.pow(Number(arr[i]), 2); //conver char into number and sq. each then add it to the sum
    num = newNum;
    if(num === 1){ //if the sum is 1, then isHappy
      isHappy=true;
      break;
    }

  }

  //23 -> 2^2 + 3^2 => 4 + 9 = 13
  //13 -> 1^2 * 3^2 => 1 + 9 = 10
  //10 -> 1^2 * 0^2 => 1 + 0 = 1
  //1  -> 1^2 * null^2


  //12 -> 1^2 * 2^2 => 1 + 4 = 5
  //5  -> 5^2 * n^2 => 25
  //25 -> 2^2 * 5^2 => 4 + 25 = 29

  return isHappy;
};


console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)

