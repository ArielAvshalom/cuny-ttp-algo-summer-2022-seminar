var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        while (nums[j] == nums[i]) {
            j++;
        }
        if (j == nums.length) {
            break;
        }
        let diff = j - 1 - i;
        for (let x = j; x < nums.length; x++) {
            nums[x - diff] = nums[x];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[nums.length - 1]) {
            return i + 1;
        }
    }
};
