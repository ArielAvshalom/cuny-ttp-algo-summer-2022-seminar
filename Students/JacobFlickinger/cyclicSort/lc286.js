// Gaussian sum!!!
var missingNumber = function(nums) {
    let sum = nums.length * (nums.length + 1) / 2;
    nums.forEach((n) => sum -= n);
    return sum;
};
