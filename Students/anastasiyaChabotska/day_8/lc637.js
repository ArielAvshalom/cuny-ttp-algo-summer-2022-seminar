// Problem Statement #

// Given a binary tree, populate an array to represent the averages of all of its levels.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const find_level_averages = function(root) {
  result = [];
  let queue = [root];
    
  while(queue.length > 0){
      
      size = queue.length;
      let levelSum = 0.0;
      for(let i = size; i > 0; i--){
          let node = queue.shift();
          if(node!=null){
              levelSum += node.value;
              if(node.left) queue.push(node.left)
              if(node.right) queue.push(node.right)
          }
          
      }
      
      result.push(levelSum/size);
  }
  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${find_level_averages(root)}`)
