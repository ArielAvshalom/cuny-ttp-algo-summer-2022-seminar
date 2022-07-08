// Problem Statement #

// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. 
// The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both baskets.

const fruits_into_baskets = function (fruits) {
    let windowStart = 0,
      maxNumber = 0;
    //ex of charFrequency: {a: 1, b:2}
    const fruitFrequency = new Map();;

    // expand the window range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
      const rightFruit = fruits[windowEnd];
      if (!fruitFrequency.get(rightFruit)) {
        fruitFrequency.set(rightFruit, 1);
      } else {
        fruitFrequency.set(rightFruit, fruitFrequency.get(rightFruit) + 1);
      }
      // shrink the window range until there are only 2 types of fruits left in the 2 baskets
      while (fruitFrequency.size > 2) {
        const leftFruit = fruits[windowStart];

        if (fruitFrequency.get(leftFruit) > 1) {
          fruitFrequency.set(leftFruit, fruitFrequency.get(leftFruit) - 1);
        } else {
          fruitFrequency.delete(leftFruit);
        }
        //shrink the window by moving windowStart to the left
        windowStart += 1;
      }
      maxNumber = Math.max(maxNumber, windowEnd - windowStart + 1);
    }
  return maxNumber;
};

/*
function fruits_into_baskets(fruits) {
    let windowStart = 0,
    maxNumber = 0;
    const fruitFrequency = {};
    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd ++) {
      const rightFruit = fruits[windowEnd];

      if (!(rightFruit in fruitFrequency)) {
        fruitFrequency[rightFruit] = 0;
      }

      fruitFrequency[rightFruit] += 1;

      while (Object.keys(fruitFrequency).length > 2) {
        const leftFruit = fruits[windowStart];
        fruitFrequency[leftFruit] -= 1;
        if (fruitFrequency[leftFruit] === 0) {
            delete fruitFrequency [leftFruit];
        }
        windowStart += 1;
      }
       maxNumber = Math.max(maxNumber, windowEnd - windowStart + 1);
    }
    return maxNumber;
};
*/

console.log(
  `Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`
);
// output: 3
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
//output: 5

// Time complexity = O(n^2);
// Space complexity = O(n)

  