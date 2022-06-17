// Problem Statement #

// Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

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

/*
// Utility function to create a
    // new node with given value
function treeNode(value)
{
    let temp = new Node(value);
    return temp;
}*/
  
  
const find_successor = function(root, key) {
    if (!root) return null

    if (root === key) {
        
        if (root.left !== null) {
            return root.left
        }

        else if(root.right !== null) {
            return root.right
        }
        else {
            return null // No successor 
        }
    }
    const queue = [root];
    console.log("root: " + root)

    while (queue.length  !== 0) {
        //const queueLength = queue.length // get the queue length before dequeueing
        //for (let i = 0; i < queueLength; i++) {
            const current_node  = queue[0]
            console.log("current node: " + current_node.val)
            let shiftedNode = queue.shift();
            console.log("shiftedNode : " + shiftedNode.val)
            
            if (current_node.left) {
                console.log ("current node's left child " + current_node.left)
                queue.push(current_node.left)
            }
            if(current_node.right) {
                console.log ("current node's right child " + current_node.right)
                queue.push(current_node.right)
            }
            // check if the current node matches the key node given
            // If True, stop traversing, return the element at top of queue and this is the next node in the level order traversal.
            if (current_node === key) {
                console.log ("key: " + key.val);
                break;
            }
        }
        console.log( "queue[0]: " + queue[0])
        //let result = queue[0]
        return queue[0]
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
  