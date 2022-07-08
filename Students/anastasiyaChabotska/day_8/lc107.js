// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const traverse = function(root) {

  //result is stack
  result = [];
  let queue = [root];

  while(queue.length > 0){




    let tempRes = [];
    size = queue.length;

    for(let i = size; i>0; i--){
      let node = queue.shift();


    //do right first, then left to keep the order from left to right
    //irrlevant now since we work level by level
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
    tempRes.push(node.value);

    }

  
   
    result.unshift(tempRes);

  }

  console.log(result[0])
  console.log(result[1]);
  console.log(result[2]);
  return result;
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Reverse level order traversal: ${traverse(root)}`)


//stack instead of queue ??
