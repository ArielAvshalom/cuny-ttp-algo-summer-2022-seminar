package BootCamp;

import java.util.Arrays;

public class lc16 {
    public static void main(String[] args) {
        System.out.println(threeSumClosest(new int[]{-2, 0, 1, 2},2));
        System.out.println(threeSumClosest(new int[]{-3, -1, 1, 2},1));
        System.out.println(threeSumClosest(new int[]{-1, 0, 1, 1},100));
    }
    public static int threeSumClosest(int[] nums, int target) {
        int closestNum=Integer.MAX_VALUE;
        Arrays.sort(nums);
        for(int i=0;i<nums.length-2;i++)
        {
            int low=i+1;
            int high=nums.length-1;
            while(low<high)
            {
                int sum=nums[i]+nums[low]+nums[high];
                if(Math.abs(target-sum)<Math.abs(closestNum))
                {
                    closestNum=target-sum;
                }
                if(sum<target)low++;
                else{high--;};
            }
        }
        return target-closestNum;
    }
}
