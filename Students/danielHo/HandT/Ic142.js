// Problem Statement #

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  
    const find_cycle_start = function(head){
        // TODO: Write your code here
        let slow = head,
        fast = head;

        // Using fast and slow pointers to detect a cycle
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
            
            if (slow === fast) {
                break; // found the cycle, exit loop
            }
        }

        // find the first node of the cycle
        slow = head;
        while (slow != fast) {
            fast = fast.next;
            slow = slow.next;
        }

        return slow; // the first node of the cycle
    };
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  head.next.next.next.next.next = new Node(6)
  
  head.next.next.next.next.next.next = head.next.next
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
  
  head.next.next.next.next.next.next = head.next.next.next
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
  
  head.next.next.next.next.next.next = head