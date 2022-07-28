class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        int i = 0;
        while (i < nums.length) {
            int current = nums[i];
            int diff = target - current;
            if (map.containsKey(diff)) {
                return new int[] {i, map.get(diff)};
            }
            map.put(current, i);
            i++;
        }
        
        return new int[] {-1, -1};
    }
}
