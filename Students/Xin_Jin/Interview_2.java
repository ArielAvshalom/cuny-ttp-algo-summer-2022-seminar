import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Interview_2 {
//    /**
//     * Definition for singly-linked list.
//     * public class ListNode {
//     *     int val;
//     *     ListNode next;
//     *     ListNode() {}
//     *     ListNode(int val) { this.val = val; }
//     *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
//     * }
//     */

    public static class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }
    public static void main(String[] args) {
        ListNode node=new ListNode(1);
        node.next=new ListNode(2);
        node.next.next=new ListNode(3);
        node.next.next.next=new ListNode(4);
        node.next.next.next.next=new ListNode(5);
        node.next.next.next.next.next=new ListNode(6);
        System.out.println(isCircular2(node));

        node.next.next.next.next.next.next = node.next.next;
        System.out.println(isCircular2(node));

        node.next.next.next.next.next.next = node.next.next.next;
        System.out.println(isCircular2(node));

        node.next = node.next.next.next;
        System.out.println(isCircular2(node));



    }
    public static boolean isCircular(ListNode node)
    {
        ListNode fast=node.next;
        ListNode slow=node;
        while(fast!=slow)
        {
            System.out.println(fast.val+"   "+ slow.val);
            if(fast.next!=null&&fast!=null)
            {
                fast=fast.next.next;
            }
            else
            {
                return false;
            }
            slow=slow.next;
            if(fast==slow)
            {
                return true;
            }
        }
        return false;
    }

    public static boolean isCircular2(ListNode node)
    {
        Set<ListNode> set=new HashSet<>();
        ListNode head=node;
        while(head!=null&&head.next!=null)
        {
            if(set.contains(head))
            {
                return true;
            }
            set.add(head);
            head=head.next;

        }
        return false;
    }
}
