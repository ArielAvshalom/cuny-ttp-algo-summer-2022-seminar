// Problem Statement #

// Given the head of a Singly LinkedList, reverse the LinkedList. 
// Write a function to return the new head of the reversed LinkedList.

class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  
    get_list() {
      let result = "";
      let temp = this;
      while (temp !== null) {
        result += temp.value + " ";
        temp = temp.next;
      }
      return result;
    }
  };
  
  const reverse = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let current = head, 
        previous = null;
        next = null;
    let i = 0;
    while ( current !== null ){
        next = current.next; // temporarily store the next node
        current.next = previous; // reverse the current node
        previous = current; // move previous to the current node since we are done with that node 
        current = next; // move to the next node
        i += 1;
    }
    // previous is the last node processed in the original linkedlist and the head of the reversed linkedlist
    return previous;
  };
  
  head = new Node(2);
  head.next = new Node(4);
  head.next.next = new Node(6);
  head.next.next.next = new Node(8);
  head.next.next.next.next = new Node(10);
  
  console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`)

  // Time complexity = O(n), where n is the total number of nodes in the linkedlist.
  // Space complexity = O(1)
  

