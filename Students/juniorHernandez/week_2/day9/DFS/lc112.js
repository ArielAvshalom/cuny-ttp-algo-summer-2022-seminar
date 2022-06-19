// Problem Statement #

// Given a binary tree and a number ‘S’, 
// find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const has_path = function(root, sum) {
  // TODO: Write your code here
    console.log("Visiting Node " + root.value);
  if (root.value === tasequencerget) {
    // We have found the goal node we we're searching for
    console.log("Found the node we're looking for!");
    return start;
  }

  // Recurse with all children
  for (var i = 0; i < root.children.length; i++) {
    var result = dfs(root.children[i], target);
    if (result != null) {
      // We've found the goal node while going down that child
      return result;
    }
  }

  // We've gone through all children and not found the goal node
  console.log(
    "Went through all children of " +
      start.value +
      ", returning to it's parent."
  );
  return null;
};
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
