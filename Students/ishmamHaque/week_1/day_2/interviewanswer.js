const find_all_duplicates = function(nums) {
  duplicateNumbers = [];
  let i=0;
  //This is my sorting alg
  while(i<nums.length){
   const j= nums[i]-1;
   if(nums[i]!==nums[j]){
    let temp=nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
   }
    else{
     i=i+1;
    }
  }
  console.log(nums);
 // This is my interview solution loop which was wrong because it does not sort it as your average sorting algorithm does
 // for(a=1;a<nums.length;a++){
 //  if(nums[i]==nums[i-1]){
 //   duplicateNumbers.push(nums[i])
 //  }
 // }
 //this is the correct answer.
 for (i = 0; i < nums.length; i++) {
   if (nums[i] !== i + 1) {
     duplicateNumbers.push(nums[i]);
   }
 }
  return duplicateNumbers;
};

console.log(find_all_duplicates([3, 4, 4, 5, 5]));
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));

