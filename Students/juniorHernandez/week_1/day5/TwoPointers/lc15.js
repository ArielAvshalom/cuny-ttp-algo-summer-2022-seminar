// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

function search_triplets(arr) {
  let triplets = [];
  // arr = arr.sort()
  //check for any 3 element whose sum equals 0.
  //add those into a triplet array then remove those elements from arr.
  //repeat the check and keep adding triplets into triplet array when found.
  //if no triplet is found return triplet

  let size = arr.length;
 for (let pointer1 = 0; pointer1 < arr.length-2; pointer1++) {//only go up to the 3rd to last index
   for(let pointer2 = 1; pointer2 < arr.length-1; pointer2++){//only go up to 2nd to last index
     let pointer3 = pointer2 + 1;// pointer3 is alwasy going to be one more than pointer2
     console.log(`p1: ${pointer1} p2: ${pointer2} p3: ${pointer3} last idx: ${arr.length}`)
     while(pointer3 < arr.length)//while pointer3 only goes up to the last index
     {
       let sum = arr[pointer1] + arr[pointer2] + arr[pointer3];
       console.log(`sum of ${arr[pointer1]} + ${arr[pointer2]} + ${arr[pointer3]} = ${sum}`)
       if(arr[pointer1] + arr[pointer2] + arr[pointer3] === 0){ //check if the sum of all element at their idx = 0
         triplets.push([arr[pointer1], arr[pointer2], arr[pointer3]]);
         ++pointer3;
       }else{
         ++pointer3;
       }
     }
   }
 }

 console.log(triplets)
  return triplets;
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
// console.log(search_triplets([-5, 2, -1, -2, 3]));
