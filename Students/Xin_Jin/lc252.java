package BootCamp;

import java.util.HashSet;
import java.util.Set;

public class lc252 {
    public boolean canAttendMeetings(int[][] intervals) {
        if(intervals.length==1)return true;
        Set<Integer> set=new HashSet<>();
        for(int i=0;i<intervals.length;i++)
        {
            for(int j=intervals[i][0];j<intervals[i][1];j++)
            {
                if(!set.add(j))return false;
            }
        }
        return true;
    }
}
