// Problem Statement #
 
// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.
 
class TreeNode {
 
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};
 
 
const traverse = function(root) {
 // levels = [];
  // TODO: Write your code here first my solution then actual
 // if(root==null) return levels;
 // const queue=[];
 // queue.push(root);
 // leftnode=null;
 // rightnode=null;
 // while(queue.length>0){
  //    levelSize=queue.length;
  //    currentLevel=[];
  //   for(i=0;i<levelSize;i++){
  //       currentNode=queue.shift();
  //       if(currentNode.left!==null) queue.push(currentNode.left);
  //      if(currentNode.right!==null) queue.push(currentNode.right);
  //       currentLevel.push(currentNode.value);
  //    }
  //    levels.push(currentLevel);
  //}
  //return levels;
  //   // If root is null return an empty array
   if(!root) return [];
   const queue = [root]; // initialize the queue with root
   const levels = []; // declare output array
   while(queue.length !== 0){
      const queueLength = queue.length; // Get the length prior to dequeueing
      const currLevel = []; // Declare this level
//      // loop through to exhaust all options and only to include nodes at currLevel
     for(let i = 0; i < queueLength; i++){
//          // Get next node
          const current = queue.shift();
          if(current.left){
              queue.push(current.left);
          }
          if(current.right){
              queue.push(current.right);
          }
//          // After we add left and right for current, we add to currLevel
          currLevel.push(current.value);
      }
//      // Level has been finished. Push into output array
      levels.push(currLevel);
  }
   return levels;
};
 
 
 
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
