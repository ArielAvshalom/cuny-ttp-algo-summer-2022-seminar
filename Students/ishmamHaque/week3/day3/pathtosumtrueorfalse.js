// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const has_path = function(root, sum) {
  // TODO: Write your code here
  let torf1=false;
  let torf2=false;
  if(root==null) return false;
  let currsum=sum-root.value;
  if(root.value==sum && root.left==null && root.right==null) return true;
  if(root.left!=null) torf1=has_path(root.left,currsum);
  if(root.right!=null) torf2=has_path(root.right,currsum);
  return(torf1||torf2);
  return false;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${has_path(root, 23)}`)
console.log(`Tree has path: ${has_path(root, 16)}`)
