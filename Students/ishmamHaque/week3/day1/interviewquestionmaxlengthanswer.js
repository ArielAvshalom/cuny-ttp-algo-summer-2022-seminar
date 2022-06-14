// Problem Statement #
 
// Given a string, find the length of the longest substring in it with no more than K distinct characters.
 
// You can assume that K is less than or equal to the length of the given string.
 
function longest_substring_with_k_distinct(str, k) {
  // TODO: Write code here This is my answer, then the correct answer.
//  Let maxlength=0;
//  Let windowStart=0;
//  Let currlength=0;
//  let charmap = new Map();
//  for(let windowEnd=0;windowEnd<str.length;windowEnd++){
//   Let i=windowEnd;
//   while(i<=windowStart){
//   currlength++;
//   if(charmap.has(str.charAt(i))){  
//    charmap.set(str.charAt(i),charmap.get(str.charAt(i))+1);
//   }
//   else if(!charmap.has(str.charAt(i)){
//    charmap.set(str.charAt(i),1);
//   }
//   Let isnextinmap=true;
//   if(!charmap.has(str.charAt(i+1)) isnextinmap=false;
//   Let currmap=charmap;
//   if((charmap.size==k && isnextinmap==false)||str.charAt(i+1)==null||windowStart==i){
//    if(currlength>maxlength) maxlength=currlength;
//    charMap=new Map();
//    currlength=0;
//    windowStart++;  
//   }
//   i++;
//  }
//  }
//   return maxlength;
  
let windowStart = 0,
maxLength = 0,
charFrequency = {};
 
// // in the following loop we'll try to extend the range [window_start, window_end]
for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
 const rightChar = str[windowEnd];
 if (!(rightChar in charFrequency)) {
   charFrequency[rightChar] = 0;
 }
 charFrequency[rightChar] += 1;
// // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
while (Object.keys(charFrequency).length > k) {
   const leftChar = str[windowStart];
   charFrequency[leftChar] -= 1;
   if (charFrequency[leftChar] === 0) {
     delete charFrequency[leftChar];
   }
   windowStart += 1; // shrink the window
 }
// // remember the maximum length so far
 maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
 }
 
 return maxLength;
}
 
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'araaci',
    2
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'araaci',
    1
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'cbbebi',
    3
  )}`
);


		
// Solution
// -----
// let windowStart = 0,
// maxLength = 0,
// charFrequency = {};
 
// // in the following loop we'll try to extend the range [window_start, window_end]
// for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// const rightChar = str[windowEnd];
// if (!(rightChar in charFrequency)) {
//   charFrequency[rightChar] = 0;
// }
// charFrequency[rightChar] += 1;
// // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
// while (Object.keys(charFrequency).length > k) {
//   const leftChar = str[windowStart];
//   charFrequency[leftChar] -= 1;
//   if (charFrequency[leftChar] === 0) {
//     delete charFrequency[leftChar];
//   }
//   windowStart += 1; // shrink the window
// }
// // remember the maximum length so far
// maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// }
 
// return maxLength;
