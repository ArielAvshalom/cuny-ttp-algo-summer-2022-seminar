package BootCamp;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class lc15 {
    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4}));
    }
    public static List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>>ans=new LinkedList<>();
        for(int i=0;i<nums.length-2;i++)
        {
            if (i == 0 || nums[i - 1] != nums[i]) {
                int curr=nums[i];
                int low=i+1;
                int high=nums.length-1;
                while (low < high) {
                    int sum = nums[i] + nums[low] + nums[high];
                    if (sum < 0) {
                        ++low;
                    } else if (sum > 0) {
                        --high;
                    } else {
                        ans.add(Arrays.asList(nums[i], nums[low++], nums[high--]));
                        while (low < high && nums[low] == nums[low - 1])
                        {
                            ++low;
                            System.out.println(low);
                        }


                    }
                }
            }
        }
        return ans;
    }

}
