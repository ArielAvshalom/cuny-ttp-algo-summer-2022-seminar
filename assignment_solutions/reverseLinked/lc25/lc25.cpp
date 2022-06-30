// Problem Statement #

// Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

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

class ReverseEveryKElements {
 public:
  static ListNode *reverse(ListNode *head, int k) {
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
  head->next->next->next->next->next = new ListNode(6);
  head->next->next->next->next->next->next = new ListNode(7);
  head->next->next->next->next->next->next->next = new ListNode(8);

  ListNode *result = ReverseEveryKElements::reverse(head, 3);
  cout << "Nodes of the reversed LinkedList are: ";
  while (result != nullptr) {
    cout << result->value << " ";
    result = result->next;
  }
}

// Solution
// -----
// class ReverseEveryKElements {
//  public:
//   static ListNode *reverse(ListNode *head, int k) {
//     if (k <= 1 || head == nullptr) {
//       return head;
//     }

//     ListNode *current = head, *previous = nullptr;
//     while (true) {
//       ListNode *lastNodeOfPreviousPart = previous;
//       // after reversing the LinkedList 'current' will become the last node of the sub-list
//       ListNode *lastNodeOfSubList = current;
//       ListNode *next = nullptr;  // will be used to temporarily store the next node
//       // reverse 'k' nodes
//       for (int i = 0; current != nullptr && i < k; i++) {
//         next = current->next;
//         current->next = previous;
//         previous = current;
//         current = next;
//       }

//       // connect with the previous part
//       if (lastNodeOfPreviousPart != nullptr) {
//         lastNodeOfPreviousPart->next =
//             previous;  // 'previous' is now the first node of the sub-list
//       } else {         // this means we are changing the first node (head) of the LinkedList
//         head = previous;
//       }

//       // connect with the next part
//       lastNodeOfSubList->next = current;

//       if (current == nullptr) {  // break, if we've reached the end of the LinkedList
//         break;
//       }
//       // prepare for the next sub-list
//       previous = lastNodeOfSubList;
//     }

//     return head;
//   }
// };

// -----

// Time complexity #
// The time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

// Space complexity #
// We only used constant space, therefore, the space complexity of our algorithm is O(1).
