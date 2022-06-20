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
  if (root === null) return 0; //if the root is null, there is no element in the tree, so the depth is 0.

  let max = 1;
  const queue = [[root, 1]]; //we making a queue FIFO, adding the root as our first element with the depth of 1.

  while (queue.length !== 0) {//while we have more elements in our queue
    const [node, depth] = queue.shift(); //assign node the value of the first element of the queue and remove that element from the queue. This is the one we will search for
    max = Math.max(max, depth); //assigns the depth to the largest between its prev max and the current depth
    if (node.left) {
      queue.push([node.left, depth + 1]);
    } //adds the left node to the queue
    if (node.right) {
      queue.push([node.right, depth + 1]);
    } //adds the right node to the queue

    /**
     * in the beginning the size of the queue will be one, after it enters the queue, it will be 0. The will take its value.
     * we will check the node's left, if it exist it will be added to the queue. The depth will increase by one.
     * we will check the node's right, if it exist it will be added to the queue. The depth will increase by one.
     * 
     * On every iteration, we will take only the first element of the queue (if the node's left and right exist, then the max size of queue will be two) and assign it to the node and its depth
     * if the queue had 2 elements, it size will be 1. If it had 1 element, its size will be 0
     * 
     * we will assign max to be largest between previous max or current depth.
     * We will check the left and right again, repeating the process until we reach null.
     * 
     * if both are null, we know we reached the bottom of the tree and can return the max.
     * 
     */
  }
  

  return max;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);

/**
 *            12
 *          /    \
 *         7       1
 *       /        /  \
 *      9       10    5
 *             /
 *            11
 */