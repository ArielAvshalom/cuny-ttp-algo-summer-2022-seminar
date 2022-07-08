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
  
  
const has_path = function (root, sequence) {
  let n = sequence.length;
  // index of current element in the sequence array
  let pos = 0; 
  return find_path(root, n, pos, sequence)
};

const find_path = function(current, length, pos, arr) {
  if (!current) {
    return false
  } 
  // If we reach the end of array, meaning the path in the sequence ends, but current node is not leaf node then return false
  if (pos === length ) {
    return false
  } 
  // If current node is not equal the current element in the sequence array, then return false
  if (current.value !== arr[pos]) {
    return false
  } 
  //If the path ends and it is a leaf node then we found the sequence
  if (!current.left && !current.right && pos === length-1) {
      return true
  }
  /*
  if (!current.left && !current.right )
  {
      if(current.value === arr[pos] && pos == length-1) 
            return true; 
         
    return false;
  }
  */
  
  return find_path(current.left, length, pos+1, arr) || find_path(current.right, length, pos+1, arr);
};

var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
  
console.log(`Tree has path sequence: ${has_path(root, [1, 0, 7])}`)
console.log(`Tree has path sequence: ${has_path(root, [1, 1, 6])}`)

// Time Complexity: O(n)