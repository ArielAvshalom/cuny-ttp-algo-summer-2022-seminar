// Problem Statement #

// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. 
//Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

const find_missing_number = function(nums){
    let i = 0;
    while (i < nums.length){
        const j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            //swap
            [nums[i], nums[j]] = [nums[j], nums[i]];            
        } else {
            i += 1
        }
    }
    missingNums = [];
    for (i =0; i < nums.length; i++){
        if (nums[i] !== i+1){
            missingNums.push(i+1)
        }
    }
    return missingNums;
}

console.log(find_missing_number([4, 0, 3, 1, 5,]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));
console.log(find_missing_number([0, 2, 3, 5]));

//Time Complexity 
//The time complexity is O(n).
