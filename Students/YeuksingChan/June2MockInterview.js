const find_all_duplicates = function (nums) {
  let duplicateNumbers = [];
  // TODO: Write your code here
  let pointer = 0;
  while (pointer < nums.length) {
    let j = nums[pointer] - 1; // eg first value is 5, j would be 4.
    if (nums[pointer] !== nums[j]) {
      [nums[pointer], nums[j]] = [nums[j], nums[pointer]];
    } else {
      pointer += 1;
    }
  }

  for (let k = 0; k < nums.length; k++) {
    if (nums[k] - 1 !== k) {
      duplicateNumbers.push(nums[k]);
    }
  }
  // return duplicateNumbers;
  return duplicateNumbers;
};

// console.log(find_all_duplicates([2,3,4,4]))
console.log(find_all_duplicates([3, 4, 4, 5, 5]));
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));
