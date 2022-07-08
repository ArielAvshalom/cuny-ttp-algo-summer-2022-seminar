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
}

const find_path = function (root, sequence) {
  // if at the start, root is null and sequence is empty, return true
  if (root === null && sequence.length === 0) return true;
  // if we went passed our leaf or surpassed the length of our sequence:
  else if (root === null || sequence.length === 0) return false;
  // if the current value is not equal that which is in the sequence:
  else if (root.value !== sequence[0]) return false;
  // given that the current value is equal to that in the sequence,
  // and given that this node is a leaf,
  // if this is the end of the sequence:
  else if (sequence.length === 1) return true;
  // recurse through the left and right children and pass a copy of the array
  // with the first element, having been visited, become removed.
  else
    return (
      find_path(root.left, sequence.slice(1)) ||
      find_path(root.right, sequence.slice(1))
    );
};

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`);
