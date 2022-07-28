var numSubarrayProductLessThanK = function (nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let product = nums[i];
        let j = i + 1;
        while (product < k && j <= nums.length) {
            count++;
            product = product * nums[j];
            j++;
        }
    }
    return count;
};
console.log(find_subarrays([2, 5, 3, 10], 30));
console.log(find_subarrays([8, 2, 6, 5], 50));
