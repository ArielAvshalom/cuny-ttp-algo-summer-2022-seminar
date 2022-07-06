# Problem#

# Given a binary tree, find its maximum depth (or height).

class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None


def find_maximum_depth(root):
  # Write Code Here
  return -1


def main():
  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  print("Tree Maximum Depth: " + str(find_maximum_depth(root)))
  root.left.left = TreeNode(9)
  root.right.left.left = TreeNode(11)
  print("Tree Maximum Depth: " + str(find_maximum_depth(root)))


main()
