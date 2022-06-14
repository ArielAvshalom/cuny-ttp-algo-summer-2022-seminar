// Problem Statement #

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

const find_happy_number = function(num) {
  // TODO: Write your code here


  //store checked sums here, if it is there, then it's a loop
  let checkedSums = {

  }

  //if it is not a happy number, then there will be a point when the sum repeats, we enter loop
  while (num != 1){

    // console.log(num);

    let tempNum = 0;
    let strNum = num.toString();

    for (let i in strNum){
    tempNum += Math.pow(parseInt(strNum[i]), 2)
    }

    // console.log("sum", tempNum)

    if (checkedSums[tempNum] == true){
      // console.log("checked sums", checkedSums)
    return false;
    }

    //save what we checked
    checkedSums[tempNum] = true;
    num = tempNum

    

  
  }

  return true;
};


console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)

