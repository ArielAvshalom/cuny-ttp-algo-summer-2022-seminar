# 1. 
def heightOfBiTree(self, root):
        if root is None:
            return 0
        q = []
        q.append(root)
        height = 0
        while True:
            nodeCount = len(q)
            if nodeCount == 0 :
                return height
            height += 1
            while nodeCount > 0:
                node = q[0]
                q.pop(0)
                if node.left is not None:
                    q.append(node.left)
                if node.right is not None:
                    q.append(node.right)
                nodeCount -= 1
                
# 2. 
def reverseLevelOrder(self, root):
        q = deque()
        q.append(root)
        ans = deque()
        while q:
            node = q.popleft()
            if node is None:
                continue 
            ans.appendleft(node.data) 
            if node.right:
                q.append(node.right)     
            if node.left:
                q.append(node.left)         
        return ans
      
# 3. 
def minHeightOfBiTree(self, root):
        if root is None: return
        q = []
        q.append({'node': root , 'depth' : 1})

        while len(q)>0:
            queueItem = q.pop(0)
            node = queueItem['node']
            depth = queueItem['depth']
            if node.left is None and node.right is None: return depth
            if node.left is not None:
                q.append({'node' : node.left , 'depth' : depth+1})
            if node.right is not None: 
                q.append({'node': node.right , 'depth' : depth+1})
                
# 4. 
def populate_sibling_pointers(self, root):
  if root == None:
    return

  current = root
  last = root

  while current != None:
    if current.left != None:
      last.next = current.left
      last = current.left

    if current.right != None:
      last.next = current.right
      last = current.right

    last.next = None  
    current = current.next
    
# 5. 
def averageOfLevels(self, root):
        q = Queue()
        q.put(root)
        while not q.empty():
            Sum = 0
            count = 0
            temp = Queue()
            while not q.empty():
                n = q.queue[0]
                q.get()
                Sum += n.data
                count += 1
                if n.left != None:
                    temp.put(n.left)
                if n.right != None:
                    temp.put(n.right)
            q = temp
            print((Sum * 1.0 / count), end = " ")
            
# 6
def levelOrderSuccessor(self, root, key):
        if root == None: return None
        elif root == key:
            if root.left:
                return root.left
            elif root.right:
                return root.right
            else:
                return None
        q = []
        q.append(root)
        while len(q) != 0:
            nd = q.pop(0)
            if nd.left != None:
                q.append(nd.left)
            if nd.right != None:
                q.append(nd.right)
            if nd == key:
                break
        return q[0]