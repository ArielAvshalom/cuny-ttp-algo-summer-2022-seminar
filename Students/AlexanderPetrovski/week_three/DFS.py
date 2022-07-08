# 1. 
def hasPathSum(self, node, s):
            ans = 0
            subSum = s - node.data
            if(subSum == 0 and node.left == None and node.right == None):
                return True
            if node.left is not None:
                ans = ans or hasPathSum(self, node.left, subSum)
            if node.right is not None:
                ans = ans or hasPathSum(self, node.right, subSum)
            return ans
          
# 2. 
def existPathUtil(self, root, arr, n, index):
    if not root or index == n:
        return False
    if not root.left and not root.right:
        if root.data == arr[index] and index == n-1:
            return True
        return False
    return ((index < n) and (root.data == arr[index]) and \
            (existPathUtil(self, root.left, arr, n, index+1) or \
            existPathUtil(self, root.right, arr, n, index+1)))
def existPath(self, root, arr, n, index):
    if not root:
        return (n == 0)         
    return existPathUtil(self, root, arr, n, 0)
  
# 3.
def printKPathUtil(self, root, path, k):
    if not root:
        return
    path.append(root.data)
    printKPathUtil(self, root.left, path, k)
    printKPathUtil(self, root.right, path, k)
    f = 0
    for j in range(len(path) - 1, -1, -1):
        f += path[j]
        if (f == k):
            printVector(path, j)
    path.pop(-1)
def printKPath(self, root, k):
    path = []
    printKPathUtil(self, root, path, k)
    