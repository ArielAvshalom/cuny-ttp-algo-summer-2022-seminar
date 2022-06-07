import java.util.*;

public class Interview_1 {
    public static void main(String[] args) {
        //from 1-to n, duplicated allowed
        //space complexity, time complexity o(n)
        int[]arr={1,2,3,4,4,4,4};

        System.out.println(duplicateFinder(arr));
        System.out.println(duplicateFinder2(arr));


    }


    public static List<Integer> duplicateFinder(int[] arr)
    {
        //arr={1,2,3,4,5};
        //arr={1,2,2,2,5};
        List<Integer>ans=new LinkedList<>();
        Arrays.sort(arr);
        //arr={1,2,3,4,4,4,4};
        for(int i=1;i<arr.length;i++)
        {
            if(arr[i]==arr[i-1])
            {
                ans.add(i+1);
            }
        }
        return ans;
    }
    public static List<Integer> duplicateFinder2(int[] arr)
    {
        //arr={1,2,3,4,5};
        //arr={1,2,2,2,5};
        List<Integer>ans=new LinkedList<>();
        Set<Integer> set= new HashSet<>();
        for (int num:arr) {
            set.add(num);
        }
        for(int i=1;i<=arr.length;i++)//
        {
            if(!set.contains(i))
            {
                ans.add(i);
            }
        }
        return ans;
    }
}
