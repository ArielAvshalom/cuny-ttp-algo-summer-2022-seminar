package BootCamp;

public class lc202 {
    public static void main(String[] args) {
        System.out.println(isHappy(19));
    }

    public static boolean isHappy(int n) {
        while (n != 1 && n != 4) {
            n = getNext(n);
        }
        return n == 1;

    }
    private static int getNext(int n)
    {
        int total=0;
        while(n>0)
        {
            int d=n%10;
            n/=10;
            total+=d*d;
        }
        return total;
    }
}
