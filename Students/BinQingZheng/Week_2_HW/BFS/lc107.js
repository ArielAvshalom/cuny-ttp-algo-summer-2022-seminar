// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. 
// You should populate the values of all nodes in each level from left to right in separate sub-arrays.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const traverse = function(root) {
  if (!root) return []

  const queue = [root]
  const result =[]

  while (queue.length !== 0) 
  {
    const queueLength = queue.length
    const currentLevel = []
    for (let i = 0; i < queueLength; i++)
    {
      const current = queue.shift();
      if(current.left) {
        queue.push(current.left);
      }
      if(current.right) {
        queue.push(current.right);
      }
      currentLevel.push(current.value);
    }
    result.unshift(currentLevel)
  }
  //return result.reverse();
  return result
};

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Reverse level order traversal: ${traverse(root)}`)

//Time complexity = O(n)
//Space complexity = O(n)