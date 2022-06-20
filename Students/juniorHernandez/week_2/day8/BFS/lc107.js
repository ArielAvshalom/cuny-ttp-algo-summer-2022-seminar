// Problem Statement #

// Given a binary tree,
// populate an array to represent its level-by-level traversal in reverse order, 
// i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  result = [];

  if (root === null) return 0

  result.push(root);
  const queue = [[root]];

  while(queue !== 0){
    console.log("before");
    console.log(queue);
    const [node] = queue.shift();
    console.log("after");
    console.log(queue);
    if(node.left){
      queue.push([node.left]);
      result.unshift(node.left)
      console.log(queue);
      console.log(result)
    }
    if(node.right){
      queue.push([node.right]);
      result.unshift(node.right)
    }
  }



  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Reverse level order traversal: ${traverse(root)}`);

/**
 *              12
 *              /\
 *            7    1
 *           /     /\
 *          9    10  5
 */