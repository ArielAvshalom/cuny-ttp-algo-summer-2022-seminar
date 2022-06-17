// Problem Statement #

// Given a binary tree, populate an array to represent the averages of all of its levels.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};
function find_maximum_depth(root) {
  //Write Code Here
  if(root==null) return 0;
  else return 1+Math.max(find_maximum_depth(root.left),find_maximum_depth(root.right));
  return -1;
}
const find_level_averages = function(root) {
  result = [];
  // TODO: Write your code here
   if(!root) return [];
   let queue = [root]; 
   while(queue.length !== 0){
      let queueLength = queue.length; 
      let currLevel = [];
      let storedvalue=0;
      let numbofval=0;
      for(i=0;i<queueLength;i++){
          const current = queue.shift();
          storedvalue=storedvalue+current.value;
          numbofval++;
          if(current.left){
              currLevel.push(current.left);
          }
          if(current.right){
              currLevel.push(current.right);
          }
      }
      result.push((storedvalue*1.0)/numbofval);
      queue=currLevel;
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
