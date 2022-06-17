// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-array
 
class TreeNode {
 
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};
 
 
const traverse = function(root) {
   if(root==null) return [];
   let queue = [root]; 
   let levels = []; 
   while(queue.length !== 0){
      const queueLength = queue.length; 
      const currLevel = []; 
     for(let i = 0; i < queueLength; i++){
          let current = queue.shift();
          if(current.left){
              queue.push(current.left);
          }
          if(current.right){
              queue.push(current.right);
          }
          currLevel.push(current.value);
      }
      levels.push(currLevel);
  }
  levels=levels.reverse();
   return levels;
};
 
 
 
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
