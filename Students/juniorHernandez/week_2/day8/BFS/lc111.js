// Problem Statement #

// Find the minimum depth of a binary tree. 
// The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

function find_minimum_depth(root) {
if (root === null) return 0;

let min = 1;
const queue = [[root, 1]]; 

while (queue.length !== 0) {
  const [node, depth] = queue.shift();
  min = Math.min(min, depth); 
  if (node.left) {
    queue.push([node.left, depth + 1]);
  } 
  if (node.right) {
    queue.push([node.right, depth + 1]);
  } 
}

return min;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
