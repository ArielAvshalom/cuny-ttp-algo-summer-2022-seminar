// Problem Statement #

// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

using namespace std;

#include <iostream>

class ListNode {
 public:
  int value = 0;
  ListNode *next;

  ListNode(int value) {
    this->value = value;
    next = nullptr;
  }
};


class ReverseSubList {
 public:
  static ListNode *reverse(ListNode *head, int p, int q) {

    int pLinks = p -1; //plinks to p node
    int qLinks = q ; //qlinks to q+1 node

    ListNode* p2Start = head;
    ListNode* p1End = nullptr;


    for (int j = 0; p2Start && j < pLinks; j++) {
      p1End = p2Start;
      p2Start = p2Start->next;
    }
    printf("%d %d\n",p1End?p1End->value: -1, p2Start? p2Start->value:-1);

    ListNode *p2End = p2Start;
    ListNode *p3Start = p2End;
    ListNode *prev = NULL;
    for (int j = p; p3Start && j <= q; j++) {

      p3Start = p2End->next;
       printf("%d %d\n",p2End?p2End->value: -1, p3Start? p3Start->value:-1);
      p2End->next = prev;
      prev = p2End;
      p2End = p3Start;
    }
    p2End = prev;

     printf("%d %d\n",p2End?p2End->value: -1, p1End? p1End->value:-1);
    if (p1End) {
      p1End->next = p2End;
    } else {
      head = p2End;
    }
     p2Start->next = p3Start;



    // TODO: Write your code here
    return head;
  }
};

int main(int argc, char *argv[]) {
  ListNode *head = new ListNode(1);
  head->next = new ListNode(2);
  head->next->next = new ListNode(3);
  head->next->next->next = new ListNode(4);
  head->next->next->next->next = new ListNode(5);

  ListNode *result = ReverseSubList::reverse(head, 1, 4);
  cout << "Nodes of the reversed LinkedList are: ";
  while (result != nullptr) {
    cout << result->value << " ";
    result = result->next;
  }
}


// Solution
// -----
// class ReverseSubList {
//  public:
//   static ListNode *reverse(ListNode *head, int p, int q) {
//     if (p == q) {
//       return head;
//     }

//     // after skipping 'p-1' nodes, current will point to 'p'th node
//     ListNode *current = head, *previous = nullptr;
//     for (int i = 0; current != nullptr && i < p - 1; ++i) {
//       previous = current;
//       current = current->next;
//     }

//     // we are interested in three parts of the LinkedList, part before index 'p', part between 'p'
//     // and 'q', and the part after index 'q'
//     ListNode *lastNodeOfFirstPart = previous;  // points to the node at index 'p-1'

//     // after reversing the LinkedList 'current' will become the last node of the sub-list
//     ListNode *lastNodeOfSubList = current;
//     ListNode *next = nullptr;  // will be used to temporarily store the next node

//     // reverse nodes between 'p' and 'q'
//     for (int i = 0; current != nullptr && i < q - p + 1; i++) {
//       next = current->next;
//       current->next = previous;
//       previous = current;
//       current = next;
//     }

//     // connect with the first part
//     if (lastNodeOfFirstPart != nullptr) {
//       lastNodeOfFirstPart->next = previous;  // 'previous' is now the first node of the sub-list
//     } else {  // this means p == 1 i.e., we are changing the first node (head) of the LinkedList
//       head = previous;
//     }

//     // connect with the last part
//     lastNodeOfSubList->next = current;

//     return head;
//   }
// };

// -----

// Time complexity #
// The time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

// Space complexity #
// We only used constant space, therefore, the space complexity of our algorithm is O(1).
