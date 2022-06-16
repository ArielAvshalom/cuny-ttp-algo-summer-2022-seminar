// Problem Statement #

// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_minimum_depth = function (root) {
  if (!root) return 0
  let depth = 0
  const queue = [root]
  // variable to store the first node remove from the queue
  let current 

  while (queue.length != 0) 
  {
    const queueLength = queue.length 
    for (let i = 0; i < queueLength; i++)
    {
      current = queue.shift()
      //if the current node is the leaf node increment the depth, return the depth
      if (!current.left && !current.right) {
        depth += 1; 
        return depth;
      }
      //if the current node has children, push it to the queue
      if (current.right) queue.push(current.right)
      if (current.left) queue.push(current.left)
    }
    //after we finish one level, before moving to next level, increment depth
    depth += 1
  }
  return depth
};

//recursive dfs
//Time Complexity = O(n)
const minimum_depth_recursive = function (root) {
  if(!root) return 0;
  if (!root.left && !root.right) return 1;
  if (!root.right) return 1 + minimum_depth_recursive(root.left)
  if (!root.left) return 1 + minimum_depth_recursive(root.right)
  
  return 1 + Math.min(minimum_depth_recursive(root.left), minimum_depth_recursive(root.right));
}; 

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
console.log(`Tree Minimum Depth: recursive solution: ${minimum_depth_recursive(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
console.log(`Tree Minimum Depth: recursive solution: ${minimum_depth_recursive(root)}`)
