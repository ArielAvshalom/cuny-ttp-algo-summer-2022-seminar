// Problem Statement #

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function(head){
  index=1;
  old=head;
  tortoise=head;
  hare=head;
  while(hare!==null && hare.next!==null){
      old=tortoise;
      tortoise=tortoise.next;
      hare=hare.next.next;
      if(hare==tortoise){
          hare=head;
//The first solution is where the cycle gets triggered.
//The second solution is where the cycle goes to after trigger aka what most programmers consider to be the "cycle start" I added both solutions to be sure
//          while(hare!=tortoise){
//            old=tortoise
//            tortoise=tortoise.next;
//            hare=hare.next;
//          }
//         return old;
          while(hare!=tortoise){
            old=tortoise
            tortoise=tortoise.next;
            hare=hare.next;
          }
          return hare;
      }
  }
  return head;
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
