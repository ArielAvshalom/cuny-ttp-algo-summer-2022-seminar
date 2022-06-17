package BootCamp;

public class lc26 {
    public static void main(String[] args) {
        System.out.println(removeDuplicates(new int[]{3, 2, 3, 6, 3, 10, 9, 3}));
    }
    public static int removeDuplicates(int[] nums) {
        int j =0 ;
        for(int i=0;i<nums.length-1;i++)
        {
            if(nums[i]!= nums[i+1])
            {
                nums[j+1]=nums[i+1];
                j=j+1;
            }
        }
        return j+1;
    }
}
