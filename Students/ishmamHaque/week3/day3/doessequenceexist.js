// Problem Statement #

// Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

// Example
// -----
// Sequence = [ 1, 9, 9 ]
// Output = true
// Explanation: Tree has a path 1 -> 9 -> 9
//      1
//     / \
//    7   9
//        | \
//        2  9

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};
const findpath=function(root,sequence,index){
  if(root==null) return false;
  if(root.value!=sequence[index]) return false;
  if(root.value==sequence[index]){
   if(index+1==sequence.length) return true;
   cook1=false;
   cook2=false;
   if(root.left!=null) cook1=findpath(root.left,sequence,index+1);
   if(root.right!=null) cook2=findpath(root.right,sequence,index+1);
   return(cook1||cook2);
  }
  return false;
}
const find_path = function(root, sequence) {
  // TODO: Write your code here
  return findpath(root,sequence,0);
  return false;
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
