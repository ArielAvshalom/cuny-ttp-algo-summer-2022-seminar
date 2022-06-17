package BootCamp;


public class lc206 {
    public static void main(String[] args) {
        ListNode node=new ListNode(1);
        node.next=new ListNode(2);
        node.next.next=new ListNode(3);
        System.out.println(reverseList(node).val);
    }
    public static  ListNode reverseList(ListNode head) {
        ListNode answer=null;
        ListNode node=head;
        while(node!=null)
        {
            ListNode temp=node.next;//make a copy for the next node
            node.next=answer;  //establish the connection
            answer=node;//move cursor to the leftmost
            node=temp;//set current node to the saved node
        }
        return answer;
    }
}
