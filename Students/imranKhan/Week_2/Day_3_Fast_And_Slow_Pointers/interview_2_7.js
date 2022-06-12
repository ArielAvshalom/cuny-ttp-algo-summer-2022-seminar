// Problem Statement #

// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const has_cycle = function(head) {
  let fast, slow = head, head;
  while (fast !== null && fast.next !== null)
  {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow)
      return true;
  }
  return false
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)