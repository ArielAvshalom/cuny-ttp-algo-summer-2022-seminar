package BootCamp;

import java.util.ArrayList;
import java.util.List;

public class lc986 {
    public static void main(String[] args) {

    }
    public int[][] intervalIntersection(int[][] arr1, int[][] arr2) {
        List<int[]> ans = new ArrayList();
        int i = 0, j = 0;
        while (i < arr1.length && j < arr2.length) {
            int lo = Math.max(arr1[i][0], arr2[j][0]);
            int hi = Math.min(arr1[i][1], arr2[j][1]);
            if (lo <= hi)
                ans.add(new int[]{lo, hi});
            if (arr1[i][1] < arr2[j][1])
                i++;
            else
                j++;
        }
        return ans.toArray(new int[ans.size()][]);
    }
}
