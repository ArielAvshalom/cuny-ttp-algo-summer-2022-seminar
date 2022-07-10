var reverseList = function(head) {
    if (head == null || head.next == null) {return head;}

    let prev = head;
    let curr = head.next;
    
    head.next = null;
    
    while (curr != null) {
        let nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }

    
    return prev;
};
