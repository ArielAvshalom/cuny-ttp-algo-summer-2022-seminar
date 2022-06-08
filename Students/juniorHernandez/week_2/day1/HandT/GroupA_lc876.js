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
    let arr = [head]; //arr is the head inital size is 1
    while (arr[arr.length - 1].next !== null) { //check if the last value in the array has a next
      arr.push(arr[arr.length - 1].next); //if so add the next to the array
    }
    let x = Math.floor(arr.length / 2); //the middle idx will be the floor of the array/2
    return arr[x];
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
