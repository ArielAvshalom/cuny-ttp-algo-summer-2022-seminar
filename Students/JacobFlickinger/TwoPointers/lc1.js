let twoSum = function(nums, target) {
    let hashMap = {};
    let i = 0;
    
    while(i < nums.length) {
        let num = nums[i];
        let diff = target - num;
        
        if(hashMap[num] == undefined) {
            hashMap[diff] = i;
            i++;
            continue;
        }
        return [hashMap[num], i];
    };
  return null;
};
