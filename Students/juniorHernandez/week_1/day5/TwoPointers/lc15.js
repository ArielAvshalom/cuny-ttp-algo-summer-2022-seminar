// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

function search_triplets(arr) {
  let triplets = [];
  let set = new Set();
  arr = arr.sort();
  //check for any 3 element whose sum equals 0.
  //add those into a triplet array then remove those elements from arr.
  //repeat the check and keep adding triplets into triplet array when found.
  //if no triplet is found return triplet

  for (let pointer1 = 0; pointer1 < arr.length - 2; pointer1++) {
    //only go up to the 3rd to last index
    for (let pointer2 = 1; pointer2 < arr.length - 1; pointer2++) {
      //only go up to 2nd to last index
      let pointer3 = pointer2 + 1; // pointer3 is alwasy going to be one more than pointer2
      //  console.log(`p1: ${pointer1} p2: ${pointer2} p3: ${pointer3} last idx: ${arr.length}`)
      while (pointer3 < arr.length) {
        //while pointer3 only goes up to the last index
        let sum = arr[pointer1] + arr[pointer2] + arr[pointer3];
        let check = [arr[pointer1], arr[pointer2], arr[pointer3]].toString();
        //  console.log(`sum of ${arr[pointer1]} + ${arr[pointer2]} + ${arr[pointer3]} = ${sum}`)
        if (sum === 0) {
          //check if the sum of all element at their idx = 0
          if (set.size === 0) {
            //if the set is empty add the first element
            set.add([arr[pointer1], arr[pointer2], arr[pointer3]]);
            // console.log(`set: ${iterator1.next().value}`);
          } else {
            let duplicate = false;
            for (const array of set) {
              //for all array inside the set
              // console.log(`checking for: ${check}`);

              if (array.toString() === check) {
                //if the array is the same as the array we're checking
                // console.log(`found : ${check}`);
                duplicate = true; //set the check to true and leave
                // console.log(`duplicate is : ${check}`);
                break;
              }
            }
            // console.log(`duplicate is ${duplicate}`);
            if (!duplicate) {
              //if the check is not true
              // console.log(`${check} was not found and being added to the set`);
              set.add([arr[pointer1], arr[pointer2], arr[pointer3]]); //add the array to the set
            }
            // console.log(`\n-----------------------------------------------\n`)
          }
          ++pointer3;
        } else {
          ++pointer3;
        }
      }
    }
  }

  triplets = [...set];
  // console.log(triplets)

  return triplets;
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2])); //[-3, -2, -1, 0, 1, 1, 2]
console.log(search_triplets([-5, 2, -1, -2, 3]));//[-5, -2, -1, 2, 3]
