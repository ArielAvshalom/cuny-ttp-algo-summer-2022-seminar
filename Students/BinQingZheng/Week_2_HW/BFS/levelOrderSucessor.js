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

    if (root.val === key) {
    //if (root === key) {
        
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
    console.log("root: " + root.val)

    while (queue.length  > 0) {
        //const queueLength = queue.length // get the queue length before dequeueing
        //for (let i = 0; i < queueLength; i++) {
            const current_node  = queue[0]
            console.log("current node: " + current_node.val)
            let shiftedNode = queue.shift();
            console.log("shiftedNode : " + shiftedNode.val)
            console.log("current node after shifted node: " + current_node.val)
            
            if (current_node.left) {
                let leftchild = current_node.left
                console.log ("current node's left child " + leftchild.val)
                console.log ("new length after adding leftchild " + queue.push(current_node.left))
            }
            if(current_node.right) {
                let rightchild = current_node.right
                console.log ("current node's right child " + rightchild.val)
                console.log (" new length after adding rightchild: " + queue.push(current_node.right))
            }
            // check if the current node matches the key node given
            // If True, stop traversing, return the element at top of queue and this is the next node in the level order traversal.
            if (current_node.val === key) {
            //if (current_node === key) {
                //console.log ("key: " + key);
                console.log ("key: " + key);
                if (queue[0] === null) {
                    console.log ("queue[0] before breaking: no successor ");
                } else {
                    console.log( "queue[0] before breaking out of while loop: " + queue[0].val);
                    break;
                }
            }
        }
        if (queue[0] === null) {
            console.log ("queue[0] after while : no successor ");
        } else { 
            console.log( "queue[0] after while loop: " + queue[0].val);
        }
        //let result = queue[0]
        return queue[0];
    };

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

 
//let key = root; // node 12
//result = find_successor(root, key)
result = find_successor(root, 12)
if (result != null)
    console.log(result.val)


//let key = root.left.left; // node 9
//result = find_successor(root, key)
result = find_successor(root, 9)
if (result != null) {
    console.log(result.val)
} else {
    console.log(" No Successor")
}

// Time Complexity = O(n) The while loop will traverse N times, where N is the number of nodes in the tree.
// Space Complexity = O(n). We are using extra space for the queue, which was used to implement level order traversal.