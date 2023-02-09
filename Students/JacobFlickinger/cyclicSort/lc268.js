// Gaussian sum!!! Gotta love math. This solution is very fast.
const cyclic_sort = function (nums) {
    let sum = nums.length * (nums.length + 1) / 2;
    nums.forEach((n) => sum -= n);
    return sum;
};


console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`);
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);

// What I initially came up with:
/*
const cyclic_sort = function (nums) {
    if (nums.length == 1) {
        if (nums[0] == 0) {
            return 1;
        }
    }
    nums.sort((a,b) => (a - b));
    if (nums[0] == 1) {
        return 0;
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1] + 1) {
            return nums[i - 1] + 1;
        }
    }
    return nums[nums.length - 1] + 1;
};
*/
