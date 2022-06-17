package BootCamp;

import java.util.HashMap;
import java.util.Map;

public class lc1 {
    public static void main(String[] args) {
        System.out.println(twoSum(new int[]{2,7,11,15},9));
    }
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<nums.length;i++)
        {
            int temp=target-nums[i];
            if(map.containsKey(temp))
            {
                return new int[]{map.get(temp),i};
            }
            map.put(nums[i],i);
        }
        return null;
    }
}
