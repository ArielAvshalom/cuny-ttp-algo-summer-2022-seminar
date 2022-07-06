# Problem Statement #

# Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None

def traverse(root):
  result = []
  # TODO: Write your code here
  return result


def main():
  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  root.right.left.left = TreeNode(20)
  root.right.left.right = TreeNode(17)
  print("Zigzag traversal: " + str(traverse(root)))


main()



# Solution
# -----
# def traverse(root):
# 	if not root: return []
# 	queue = collections.deque([root])
# 	res = []
# 	even_level = False
# 	while queue:
# 		n = len(queue)
# 		level = []
# 		for _ in range(n):
# 			node = queue.popleft()
# 			level.append(node.val)
# 			if node.left:
# 				queue.append(node.left)
# 			if node.right:
# 				queue.append(node.right)
# 		if even_level:
# 			res.append(level[::-1])
# 		else:
# 			res.append(level)
# 		even_level = not even_level
# 	return res

# -----

# Time complexity #
# The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

# Space complexity #
# The space complexity of the above algorithm will be O(N) as we need to return a list containing the level order traversal. We will also need O(N) space for the queue. Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), therefore we will need O(N) space to store them in the queue.
