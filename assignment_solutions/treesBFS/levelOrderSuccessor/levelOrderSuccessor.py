# Problem Statement #

# Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

#            (  1  )
#           /       \
#       (  2  )    (  3  )
#       /     \       \
# (  4  )  (  5  )   (  6  )

# Given Node: 3
# Level Order Successor: 4


#             (  12  )
#            /       \
#       (  7  )    (  1  )
#       /            /    \
#  (  9  )       (  10  )(  5  )

# Given Node: 9
# Level Order Successor: 10


class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None


def find_successor(root, key):
  # TODO: Write your code here
  return None


def main():
  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  result = find_successor(root, 12)
  if result:
    print(result.val)
  result = find_successor(root, 9)
  if result:
    print(result.val)


main()
