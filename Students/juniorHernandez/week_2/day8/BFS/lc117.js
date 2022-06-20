// Problem Statement #

// Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // level order traversal using 'next' pointer
  print_level_order() {
    console.log("Level order traversal using 'next' pointer: ");
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current != null) {
        process.stdout.write(`${current.val} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
    }
  }
};

const connect_level_order_siblings = function(root) {
  if (root === null) return root;

  const queue = [[root, 0]];

  while (queue.length !== 0 ) {
    const [current, level] = queue.shift();//grab the first element of the queue and place in current and level. remvoe element from queue

    if (queue.length) {
      const [next, nextLevel] = queue[0];
      if (level === nextLevel) {
        current.next = next;
      }
    }
    if (current.left) queue.push([current.left, level + 1]);
    if (current.right) queue.push([current.right, level + 1]);
  }

  return root;

};


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_level_order_siblings(root);

/***
 *            12  -> null
 *            /\
 *           7->1 -> null
 *          /  / \
 *         9->18->5  -> null
 * 
 * [12, null, 7, 1, null. 9, 18, 5, null]
 * [12, null, 7, 1, null, 9, null, 18, 5, null]
 * 
 */

root.print_level_order()
