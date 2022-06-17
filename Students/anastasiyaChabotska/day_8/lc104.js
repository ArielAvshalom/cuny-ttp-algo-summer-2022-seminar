// Problem#

// Given a binary tree, find its maximum depth (or height).

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


function find_maximum_depth(root) {
  let maxDepth = 0;
  let queue = [];
  let prev = [];
  queue.push(root);


  
  while(queue.length > 0){
    let node = queue.shift();

    console.log(node.val);

    if(node.left!=null){
    queue.push(node.left);
    prev[node.left] = node;
    }
    if(node.right!=null){
    queue.push(node.right);
    prev[node.right] = node;
    }
  }

  console.log((prev));

  return -1
}

//start node
// neighbors = current.left, current.right
//queue.push(start)
//while (queue.length > 0)
//

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);


