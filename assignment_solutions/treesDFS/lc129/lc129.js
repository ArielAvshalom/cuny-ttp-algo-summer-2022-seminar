// Problem Statement #

// Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.

// Example
// -----
// Output = 408
// Explanation: Sum of all path numbers 17 + 192 + 199
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


const find_sum_of_path_numbers = function(root) {
  // TODO: Write your code here
  return -1;
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)

/* Solution
var sumNumbers = function(root) {
  return sum(0, root);
};

var sum = function (before, root) {
  if (!root) return before;
  var val = before * 10 + root.val;
  if (!root.left) return sum(val, root.right);
  if (!root.right) return sum(val, root.left);
  return sum(val, root.left) + sum(val, root.right);
};
 */