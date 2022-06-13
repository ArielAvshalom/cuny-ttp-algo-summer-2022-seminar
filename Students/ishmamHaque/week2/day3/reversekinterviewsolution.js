class Node { //This demonstrates my incorrect solution and the correct solution
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
  get_list() {
    result = "";
    temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};
//const reverse_every_k_elements = function(head, k) {
  // TODO: Write your code here
//  if(k==1) return head;
//  firstpointer=head;
//  firstprevious=null;
//  secondpointer=head;
//  secondprevious=null;
//  firstindex=1;
//  secondindex=1;
//  firsttarget=1;
//  secondtarget=firstarget+(k-1);
//  while(firstpointer.next!=null){
//    while(firstindex<firsttarget){
//      firstprevious=firstpointer;
//      firstpointer=firstpointer.next;
//      firstindex=firstindex+1;
//    }
//    while(secondindex<secondtarget){
//     if(secondpointer.next==null) break;
//     secondprevious=secondpointer;
//     secondpointer=secondpointer.next;
//     secondindex=secondindex+1;
//    }
//    firstpointer2=firstpointer;
//    firstprevious2=firstprevious;
//    secondpointer2=secondpointer;
//    secondprevious2=secondprevious;
//    while(firstpointer2!=secondpointer2){
//      secondpreviousiterator=firstpointer;
//      firstvalue=firstpointer2.value;
//      secondvalue=firstpointer2.value;
//      firstpointer2.value=secondvalue;
//      secondpointer2.value=firstvalue;
//      firstpointer2=firstpointer2.next;
//      secondpointer2=secondprevious;
//      while(secondpreviousiterator!=secondprevious){
//        if(secondpreviousiterator.next=secondprevious) break;
//        secondpreviousiterator=secondpreviousiterator.next;
//      }
//      secondprevious=secondpreviousiterator;
//    }
//    firsttarget=firsttarget+k;
//    secondtarget=secondtarget+k-1;
//  }
//  return head;
//}
// Solution
// -----
 function reverse_every_k_elements(head, k) {
   if (k <= 1 || head === null) {
     return head;
   }
   let current = head,
     previous = null;
   while (true) {
     const last_node_of_previous_part = previous;
     // after reversing the LinkedList 'current' will become the last node of the sub-list
     const last_node_of_sub_list = current;
     let next = null; // will be used to temporarily store the next node
     let i = 0;
     while (current !== null && i < k) { // reverse 'k' nodes
       next = current.next;
       current.next = previous;
       previous = current;
       current = next;
       i += 1;
     }
     // connect with the previous part
     if (last_node_of_previous_part !== null) {
       last_node_of_previous_part.next = previous;
     } else {
       head = previous;
     }
     // connect with the next part
     last_node_of_sub_list.next = current;
     if (current === null) {
       break;
     }
     previous = last_node_of_sub_list;
   }
   return head;
 }
head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)
console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_every_k_elements(head, 3).get_list()}`)
