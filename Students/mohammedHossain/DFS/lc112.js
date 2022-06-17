// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// we will subtract the current node from sum we call has_path() recursively
// such that, when sum === 0, we know that all the values within nodes of the
// call-stack add up to the sum.
const has_path = function (root, sum) {
  if (root === null) return false;
  // else if it is a leaf and the nodes in the path are equal to the sum
  else if (root.left === null && root.right === null && sum - root.value === 0)
    return true;

  return (
    has_path(root.left, sum - root.value) ||
    has_path(root.right, sum - root.value)
  );
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${has_path(root, 23)}`);
console.log(`Tree has path: ${has_path(root, 16)}`);
