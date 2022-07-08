// Problem Statement #

// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_minimum_depth = function(root) {
  let queue = [root];
  let currentLevel = 1;
  let minPath = Infinity;

  while(queue.length > 0){
     size = queue.length;

     for(let i=size; i > 0; i--){
       let node = queue.shift();
       if(!node.left && !node.right) {
      
         if(currentLevel < minPath) minPath = currentLevel;
    
       }
       if(node.left) queue.push(node.left)
       if(node.right) queue.push(node.right)
     }
     currentLevel++;
  }
  return minPath;
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
