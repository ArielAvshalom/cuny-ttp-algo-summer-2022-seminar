const triplet_sum_close_to_target = function (arr, target_sum) {
    if (arr.length < 3) return [];
    
    arr.sort((a, b) => a - b);
    
    let leastDiff = Number.MAX_SAFE_INTEGER;
    let bestSum;
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue;
      
        let lo = i + 1;
        let hi = arr.length - 1;
        
        while(lo < hi) {
            
            let sum = arr[lo] + arr[i] + arr[hi];
            let diff = Math.abs(sum - target_sum);
            if (diff < leastDiff) {
                leastDiff = diff;
                bestSum = sum;
            }
            while(lo < hi && arr[lo] === arr[lo + 1] ) lo++;
            while(lo < hi && arr[hi] === arr[hi - 1] ) hi--;
            if (sum < target_sum){
                lo++;
            } else {
                hi--;
            }
      
        }
    }
    return bestSum;
};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));
