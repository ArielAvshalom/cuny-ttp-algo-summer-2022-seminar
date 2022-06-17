package BootCamp;

import java.util.Arrays;

public class lc268 {
    public static void main(String[] args) {
        System.out.println(missingNumber(new int[]{3, 1, 5, 4, 2}));
        System.out.println(missingNumber(new int[]{2, 6, 4, 3, 1, 5}));
        System.out.println(missingNumber(new int[]{1, 5, 6, 4, 3, 2}));
    }
    public static int missingNumber(int[] nums) {
        return (nums.length + 1) * nums.length / 2 - Arrays.stream(nums).sum();
    }
}
