package BootCamp;

import java.util.LinkedList;
import java.util.List;

public class lc713 {
    public static void main(String[] args) {
        System.out.println(numSubarrayProductLessThanK(new int[]{2, 5, 3, 10},30));
        System.out.println(numSubarrayProductLessThanK(new int[]{8, 2, 6, 5},50));
    }
//    public int numSubarrayProductLessThanK(int[] nums, int k) {
//        List<List<Integer>>list=new LinkedList<>();
//        list.add(new LinkedList<Integer>());
//        for(int num:nums)
//        {
//            List<List<Integer>> temp=new LinkedList<>();
//            for(List<Integer> curr:list)
//            {
//                temp.add(new LinkedList<Integer>(curr){{add(num);}});
//            }
//            for(List<Integer>curr:temp)
//            {
//                list.add(curr);
//            }
//        }
//        int numOfElement=0;
//        for(List<Integer> ele:list)
//        {
//            int product=0;
//            for(int i=0;i<ele.size();i++)
//            {
//                product*=ele.get(i);
//            }
//            if(product<k)numOfElement++;
//        }
//        return numOfElement;
//    }
public static int numSubarrayProductLessThanK(int[] nums, int k) {
    int count = 0, product = 1;
    for(int j = 0, i = 0; i < nums.length; i++) {
        product *= nums[i];
        while(j <= i && product >= k)
            product /= nums[j++];

        count += (i - j + 1);
    }
    return count;
}

}
