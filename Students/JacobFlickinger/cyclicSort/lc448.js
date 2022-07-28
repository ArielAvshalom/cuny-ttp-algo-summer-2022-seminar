const find_missing_numbers = function(nums) {
    nums.sort((a,b) => (a - b));
    let arr = [];
    
    if (nums[0] > 1) {
        let x = 1;
        while (x < nums[0]) {arr.push(x++);}
    }
    
    let i = 0;
    while (i < nums.length) {
        if (nums[i] > nums[i - 1] + 1) {
            let x = nums[i - 1] + 1;
            while (x < nums[i]) {arr.push(x++);}
        }
        i++;
    }
    
    if (nums[nums.length - 1] < nums.length) {
        let x = nums[nums.length - 1] + 1;
        while (x <= nums.length) {arr.push(x++);}
    }
    
    return arr;
};

console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]));
console.log(find_missing_numbers([2, 4, 1, 2]));
console.log(find_missing_numbers([2, 3, 2, 1]));
