// Problem Statement #

// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

// If the total number of nodes in the LinkedList is even, return the second middle node.

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const find_middle_of_linked_list = function(head) {
  // TODO: Write your code here
  return head;
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

head.next.next.next.next.next = new Node(6)
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

head.next.next.next.next.next.next = new Node(7)
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)



// Solution
// -----
// function find_middle_of_linked_list(head) {
//   let slow = head,
//     fast = head;
//   while ((fast !== null && fast.next !== null)) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return slow;
// }

// -----

// Time complexity #
// The above algorithm will have a time complexity of O(N) where ‘N’ is the number of nodes in the LinkedList.

// Space complexity #
// The algorithm runs in constant space O(1).
