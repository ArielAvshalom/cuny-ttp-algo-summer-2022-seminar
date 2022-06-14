package BootCamp;

import java.util.HashSet;
import java.util.Set;

class ListNode {
      int val;
      ListNode next;
      ListNode(int x) {
          val = x;
          next = null;
      }
  }
public class lc142 {
    // Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
    public static void main(String[] args) {
        ListNode node=new ListNode(3);
        node.next=new ListNode(2);
        node.next.next=new ListNode(0);
        node.next.next.next=new ListNode(-4);
        node.next.next.next.next=node.next;
        System.out.println(findStartingNode(node).val);
    }
    public static ListNode findStartingNode(ListNode head)
    {
        Set<ListNode> set=new HashSet<>();
        int index=0;
        while(head!=null)
        {
            if(set.contains(head))return head;
            set.add(head);
            index++;
            head=head.next;
        }
        return null;
    }
}
