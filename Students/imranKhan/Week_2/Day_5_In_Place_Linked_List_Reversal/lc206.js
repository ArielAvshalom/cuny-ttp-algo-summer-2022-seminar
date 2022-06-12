// Problem Statement #

// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

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
  let current = head;
  let previous = null;
  let nextVal = null;

  if (head === null)
    return null;


  while (current !== null)
  {
    nextVal = current.next;   // Store the next node
    current.next = previous;  // Set the next node to be the previous node
    previous = current;       // Set previous now equal the node we're currently in 
    current = nextVal;        // Set current to equal the previous current.next that we stored
                              // in the next variable
  }
  
  head = previous;

  return head;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`)
