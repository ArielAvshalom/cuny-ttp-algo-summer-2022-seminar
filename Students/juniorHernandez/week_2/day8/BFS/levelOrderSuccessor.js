// Problem Statement #

// Given a binary tree and a node,
// find the level order successor of the given node in the tree.
// The level order successor is the node that appears right after the given node in the level order traversal.

//            (  1  )
//           /       \
//       (  2  )    (  3  )
//       /     \       \
// (  4  )  (  5  )   (  6  )

// Given Node: 3
// Level Order Successor: 4


//             (  12  )
//            /       \
//       (  7  )    (  1  )
//       /            /    \
//  (  9  )       (  10  )(  5  )

// Given Node: 9
// Level Order Successor: 10

class TreeNode {

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};


const find_successor = function(root, key) {
if (root === null) return 0; //if the root is null, there is no element in the tree, so the depth is 0.

let successor = null;
if(root.value === key){//if the root is our key
  if(root.left) return root = root.left.value //if left is not null, that is our successor
  else{
    return root = root.right.value// else the right is our sucessor
  }
}
const queue = [[root, 1]]; //we making a queue FIFO, adding the root as our first element with the depth of 1.

while (queue.length !== 0) {
  //while we have more elements in our queue
  const [node, depth] = queue.shift(); //assign node the value of the first element of the queue and remove that element from the queue. This is the one we will search for
  max = Math.max(max, depth); //assigns the depth to the largest between its prev max and the current depth
  if (node.left) {
    queue.push([node.left, depth + 1]);
  } //adds the left node to the queue
  if (node.right) {
    queue.push([node.right, depth + 1]);
  } //adds the right node to the queue

}
  

  return successor;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
result = find_successor(root, 12)
if (result != null)
  console.log(result.val)
result = find_successor(root, 9)
if (result != null)
  console.log(result.val)

