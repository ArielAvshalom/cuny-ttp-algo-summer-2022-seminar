/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

//code

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    //todo your code here
};

//note that JavaScript doesn't have a heap method out of the box. 

/* solution
var topKFrequent = function(nums, k) {
    let counts = new Map();
    let buckets = [];
    for (let i = 0; i <= nums.length; i++)
        buckets.push([]);
    
    // count frequent of the elements
    for (let num of nums) {
        if (counts.has(num)) {
            counts.set(num, counts.get(num) + 1);
        } else {
            counts.set(num, 1);
        }
    } 
    // put them into buckets by frequent
    for (let [key, value] of counts) {
        buckets[value].push(key);
    }
    // fetch the larget frequest bucket first, until reach k
    let ans = [];
    for (let i = buckets.length - 1; i > 0 && ans.length < k; i--) {
        if (buckets[i] !== null) ans.push(...buckets[i]);
    }
    return ans;
};
*/