function search_triplets(arr) {
    let triplets = [];
    
    let length = arr.length;
    if (length < 3) {
        return triplets;
    }
    
    arr.sort(function(a, b) {
        return a - b;
    });
    if (arr[0] > 0) {
        return triplets;
    }
    
    for (let i = 0; i < length - 2; i++) {
        if (i > 0 && arr[i] == arr[i-1]) {
            continue;
        }
        if (arr[0] > 0) {
            return triplets;
        }
        
        let left = i + 1;
        let right = length - 1;
        while (left < right) {
            let sum = arr[left] + arr[i] + arr[right];
            if (sum == 0) {
                triplets.push([arr[left], arr[i], arr[right]]);
                while (left < length - 1 && arr[left] == arr[left+1]) {
                    left++;
                }
                while (right > 1 && arr[right] == arr[right - 1]) {
                    right--;
                }
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    
    return triplets;
};

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));
