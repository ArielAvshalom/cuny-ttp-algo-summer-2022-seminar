package BootCamp;

public class lc287 {
    public static void main(String[] args) {
        System.out.println(findDuplicate(new int[]{1,3,4,2,2}));
    }
    public static int findDuplicate(int[] nums) {
        for(int i=0;i<nums.length;i++)
        {
            if(nums[i]!=i+1)
            {
                int temp=nums[i];
                nums[i]=nums[temp];
                nums[temp]=temp;
            }
        }
        printArr(nums);
        for(int i=1;i<nums.length;i++)
        {
            if(nums[i]==nums[i-1])
            {
                return nums[i];
            }
        }
        return 0;
    }
    public static void printArr(int[]num)
    {
        for (int i:num
             ) {
            System.out.println(i);
        }
    }
}
