package BootCamp;

import java.util.Arrays;

public class lc259 {
    public static void main(String[] args) {
        System.out.println(threeSumSmaller(new int[]{-1, 0, 2, 3},3));
        System.out.println(threeSumSmaller(new int[]{-1, 4, 2, 1, 3},5));
    }

    public static  int threeSumSmaller(int[] nums, int target) {
        Arrays.sort(nums);
        int ans = 0;
        for(int i = 0 ; i < nums.length ; i++){
            int low = i + 1;
            int high = nums.length - 1;
            int searchTarget =  target - nums[i] - 1;
            while(low < high){
                int sum = nums[low] + nums[high];
                if(sum <= searchTarget) {
                    ans += high - low;
                    low++;
                }
                else if(sum > searchTarget) high--;
            }
        }
        return ans;
    }
}
