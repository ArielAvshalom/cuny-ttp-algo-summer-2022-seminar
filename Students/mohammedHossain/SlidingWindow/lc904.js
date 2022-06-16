// Problem Statement #

// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both baskets.

function fruits_into_baskets(fruits) {
  let leftHand = 0;
  let maxFruits = 0;

  // I am solving this problem in a similar fashion of how I solved lc340.js
  let baskets = new Map();

  for (let rightHand = 0; rightHand < fruits.length; rightHand++) {
    let fruit = fruits[rightHand];
    increment2Map(fruit, 1, baskets);

    while (baskets.size > 2) {
      let left_fruit = fruits[leftHand];
      increment2Map(left_fruit, -1, baskets);
      leftHand++;
    }

    let currentNumOfFruits = rightHand - leftHand + 1;
    maxFruits = Math.max(maxFruits, currentNumOfFruits);
  }

  return maxFruits;
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
  `Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`
);
console.log(
  `Maximum number of fruits: ${fruits_into_baskets([
    'A',
    'B',
    'C',
    'B',
    'B',
    'C',
  ])}`
);
