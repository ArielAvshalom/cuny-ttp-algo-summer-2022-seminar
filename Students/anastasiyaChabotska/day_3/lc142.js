// Problem Statement #

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function(head){

  let slow = head;
  let fast = head;

  while (fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;

    if(slow == fast)
    break;
  }

  //traced the logic on the paper, looks like the start of the cycle will always be the slow.next
  //tested with other test cases, slow.next is incorrect
  //some smarter math is involved
  //we can count the length of the cycle, but what can it give us? 
  //going backwards, until pointers meet? but it's singly linked...

  return slow.next;
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
