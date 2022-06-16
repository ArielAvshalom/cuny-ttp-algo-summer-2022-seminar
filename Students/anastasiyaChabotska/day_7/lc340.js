// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

function longest_substring_with_k_distinct(str, k) {
  // TODO: Write code here
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


//araaci
//araa 4 will be the answer?? 

//distinct = 0
//dict = {}
//max = 0
// wStart = 0
//for wEnd = 0; wEnd < str.lengtg; wEnd++
//      while(distinct <= k)
//      if dict[str[wEnd]==null] dict.push distinct++ 
//      wEnd++
//  max = Max(max, wEnd - wStart + 1)
//  wStart++


