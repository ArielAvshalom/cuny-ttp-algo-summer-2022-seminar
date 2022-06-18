// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
};

// In-order DFS
var has_path = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right && root.value === targetSum ) return true;
  return has_path (root.left, targetSum - root.value) || has_path (root.right, targetSum - root.value);
};

// In-order DFS
var has_path_sum = function (root, targetSum) {
  if (!root) return false;
  let hasPath = false;

  const has_sum = (node, sum) => {
    if (!node.left && !node.right) {
       if (node.value === sum ) {
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

// In-order DFS
var has_path_alter = function (root, targetSum) {
  
  const sum = function (node, currSum) {
    if (!node) return false;
    currSum += node.value
    if (!node.left && !node.right) {
      return currSum === targetSum;
    }
    return sum (node.left, currSum) || sum (node.right, currSum);
  }
  return sum (root, 0)
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${has_path(root, 23)}`)
console.log(`Tree has path: ${has_path(root, 16)}`)
console.log(`Tree has path: ${has_path_sum(root, 23)}`)
console.log(`Tree has path: ${has_path_sum(root, 16)}`)
console.log(`Tree has path: ${has_path_alter(root, 23)}`)
console.log(`Tree has path: ${has_path_alter(root, 16)}`)


// Time complexity = O(n)

// Space complexity = O(h) where h is the height of the tree because we are using recursion so we are going to have a recursive call stack. 
// In the worst case, space complexity is O(n).
// If the tree is a balanced binary tree then space complexity is O(log n).