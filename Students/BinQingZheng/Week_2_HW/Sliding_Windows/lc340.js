// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

const longest_substring_with_k_distinct = function (str, k) {
    let windowStart = 0,
      maxLength = 0;
    const charFrequency = new Map();;

    // expand the window range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (!charFrequency.get(rightChar)) {
        charFrequency.set(rightChar, 1);
      } else {
        charFrequency.set(rightChar, charFrequency.get(rightChar) + 1);
      }
      // shrink the window range until there are only k distinct characters in the charFrequency
      while (charFrequency.size > k) {
        const leftChar = str[windowStart];
        //charFrequency[leftChar] -= 1;
        if (charFrequency.get(leftChar) > 1) {
          charFrequency.set(leftChar, charFrequency.get(leftChar) - 1);
        } else {
          charFrequency.delete(leftChar);
        }
        //shrink the window by moving windowStart to the left
        windowStart += 1;
      }
      // We add 1, b/c we are dealing with length, maxLength is length, k is length, window start and windowEnd are both index.
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
  return maxLength;
};

/*
const longest_substring_with_k_distinct = function (str, k) {
    let windowStart = 0,
      maxLength = 0;
    //ex of charFrequency: {a: 1, b:2}
    const charFrequency = {};

    // expand the window range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      
      if (!(rightChar in charFrequency)) {
        charFrequency[rightChar] = 0;
      }

      charFrequency[rightChar] += 1;
      
      // shrink the window range until there are only k distinct characters in the charFrequency
      while (Object.keys(charFrequency).length > k) {
        const leftChar = str[windowStart];
        charFrequency[leftChar] -= 1;
        if (charFrequency[leftChar] === 0) {
          delete charFrequency[leftChar];
        }
        //shrink the window by moving windowStart to the left
        windowStart += 1;
      }
      // We add 1, b/c we are dealing with length, maxLength is length, k is length, window start and windowEnd are both index.
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
};
*/

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'araaci',
    2
  )}`
);
//output: maxlength = 3 b/c length of "araa" = 4

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'araaci',
    1
  )}`
);
//output : maxlength = 2, legnth of "aa" = 2

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'cbbebi',
    3
  )}`
);
//output: maxLength = 5, b/c legnth of "bbebi" = 5

// Time complexity = O(n^2);
// Space complexity = O(n);





   