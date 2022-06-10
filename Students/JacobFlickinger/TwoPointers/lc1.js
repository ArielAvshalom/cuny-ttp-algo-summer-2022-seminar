let twoSum = function(arr, targetSum) {
    let hashMap = {};
    let i = 0;
    
    while(i < arr.length) {
        let num = arr[i];
        let diff = targetSum - num;
        
        if(hashMap[num] == undefined) {
            hashMap[diff] = i;
            i++;
            continue;
        }
        return [hashMap[num], i];
    };
  return null;
};
