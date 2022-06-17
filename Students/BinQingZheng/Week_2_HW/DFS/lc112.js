// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
};
  

const has_path = function(root, targetSum) {
    // passing 0 as current sum  
  return path_sum(0, root, targetSum) 
};

// In-order DFS
var path_sum = function (curSum, node, targetSum) {
  if (!node) return false;
  console.log("before adding current sum: " + curSum)
  curSum += root.value;
  if (!node.left && !node.right) {
    console.log("leaf node: current sum: " + curSum)
    return curSum === targetSum;
  }

  return path_sum (curSum, node.left, targetSum) || path_sum (curSum, node.right, targetSum);
};



// In-order DFS
var has_path_sum = function (root, targetSum) {
  if (!root) return false;
  let hasPath = false;

  const has_sum = (node, sum) => {
    if (!node.left && !node.right) {
      if (sum ===root.value ) {
        hasPath = true;
      }
      return;
    } 
    if (node.left) {
      has_sum (node.left, sum - node.value);
    }

    if (node.right) {
      has_sum(node.right, sum- node.value);
    }
  }

  has_sum(root, targetSum);
  return hasPath;
};

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
//console.log(`Tree has path: ${has_path(root, 23)}`)
//console.log(`Tree has path: ${has_path(root, 16)}`)
console.log(`Tree has path: ${has_path_sum(root, 23)}`)

// Time complexity = O(n)

// Space complexity = O(h) where h is the height of the tree because we are using recursion so we are going to have a recursive call stack. 
// In the worst case, space complexity is O(n).
// If the tree is a balanced binary tree then space complexity is O(log n).