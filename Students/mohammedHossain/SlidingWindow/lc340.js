// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

function longest_substring_with_k_distinct(str, k) {
  let longestSubstring = -1;
  let leftWindow = 0;

  // we will use a map to keep track of all occurences. A map, whose values
  // are always > 0, indicating they exist, otherwise the key is deleted
  let map = new Map();

  for (let rightWindow = 0; rightWindow < str.length; rightWindow++) {
    let c = str.charAt(rightWindow);
    // add the occurence to the map
    increment2Map(c, 1, map);

    while (map.size > k) {
      let left_char = str.charAt(leftWindow);
      // subtract the occurence from the map, delete it if it was the last occurence
      increment2Map(left_char, -1, map);
      leftWindow++;
    }

    let currentLength = rightWindow - leftWindow + 1;
    longestSubstring = Math.max(longestSubstring, currentLength);
  }

  return longestSubstring;
}

// increment (or decrement) based on `incrementBy` value
// if value is <= 0, delete from map
function increment2Map(key, incrementBy, map) {
  if (map.has(key)) {
    // precondition: key already exists
    let currentValue = map.get(key);
    if (currentValue + incrementBy > 0) {
      // precondition: new value is > 0
      map.set(key, currentValue + incrementBy);
    } else {
      // precondition: new value <= 0
      map.delete(key);
    }
  } else {
    // precondition: key doesn't exist
    // add to map if value > 0
    if (incrementBy > 0) map.set(key, incrementBy);
  }
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
