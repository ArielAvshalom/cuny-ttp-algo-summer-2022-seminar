// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const has_path = function (root, sum) {

  if (root.value === sum) return true;

  let stack = [root];

  let mySum = 0;
  let path = [];
  while (stack.length > 0) {
    let node = stack.pop();
    path.push(node);
    console.log(node.value);
    mySum += node.value;
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
    //reached leaf node
    if (node.left === null && node.right === null) {

      if (mySum === sum) return true;
      //how to reset it properly??? 
      //keep a path of nodes visited? 
      mySum -= path.pop().value;
      console.log("SUM", mySum);
      while (path[[path.length - 1]] !== null &&
        (path[path.length - 1].left && path[path.length - 1].left != stack[stack.length - 1]) ||
        (path[path.length - 1].right && path[path.length - 1].right != stack[stack.length - 1])
      ) {

        mySum -= path.pop();
      }
    }
  }


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


//stack = [root]
// while stack is not empty
//    node = stack.pop
//    stack.push node.right
//    stack.push node.left
//    
