class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
class LinkedList:
    def __init__(self):
        self.head = None
        
    def printMiddle(self):
        slow, fast = self.head, self.head
        while slow and fast.next:
            slow, fast = slow.next, fast.next.next
        return slow.data
      
    def hasCycle(self):
        slow, fast = self.head, self.head
        while slow and fast.next:
            slow, fast = slow.next, fast.next.next
            if slow != fast:
                return f'List has cycle: {False}'
            else:
                return f'List has cycle: {True}'
              
    def findCycleStart(self):
        slow, fast, new_point = self.head, self.head, self.head
        while fast and fast.next:
            slow, fast = slow.next, fast.next.next
            if slow == fast:
                meeting_point = slow
                while meeting_point != new_point:
                    meeting_point, new_point = meeting_point.next, new_point.next
                return new_point
        return None

    def sumOfSqs(n):
        sqSum = 0
        while n:
            res = n % 10
            res **= 2
            sqSum += res
            n //= 10
        return sqSum

    def isHappyNum(self, n):
        slow = fast = n
        slow, fast = sumOfSqs(slow), sumOfSqs(sumOfSqs(fast))
        while slow != fast:
            slow, fast = sumOfSqs(slow), sumOfSqs(sumOfSqs(fast))
        return slow == 1

      
      