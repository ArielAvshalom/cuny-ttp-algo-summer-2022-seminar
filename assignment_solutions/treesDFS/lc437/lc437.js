// Problem Statement #

// Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

// Example
// -----
// targetSum = 12
// Output = 3
// Explanation: Tree has three paths w/ sum 12: "7 -> 5" "1 -> 9 -> 2" & "9 -> 3"
//      1
//     / \
//    7   9
//  / |   | \
// 6  5   2  3

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const count_paths = function(root, S) {
  // TODO: Write your code here
  return -1
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has paths: ${count_paths(root, 11)}`)
