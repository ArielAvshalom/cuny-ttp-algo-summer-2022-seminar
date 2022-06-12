class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
class LinkedList:
    def __init__(self):
        self.head = None
        
    def printList(self):
        h = self.head
        while h:
            print(h.data, end=' ')
            h = h.next
        print()
            
    def reverseList(self):
            prev = None
            curr = self.head
            while curr:
                nxt = curr.next
                curr.next = prev
                prev = curr
                curr = nxt
            self.head = prev
            
LL = LinkedList()
LL.head = Node(1)
n2 = Node(2)
n3 = Node(3)
LL.head.next = n2
n2.next = n3
LL.reverseList()
LL.printList()