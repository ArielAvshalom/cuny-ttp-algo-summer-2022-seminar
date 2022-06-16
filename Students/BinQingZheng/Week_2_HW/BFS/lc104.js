// Problem#

// Given a binary tree, find its maximum depth (or height).

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

// BFS
function find_maximum_depth(root) {
    //If root is null return 0
    if(!root) return 0
    
    let level = 0
    const queue = [root]

    while (queue.length !== 0) {
        // Get the length prior to dequeueing, # of nodes must be process in the current tree level 
        const queueLength = queue.length
        for (let i = 0; i < queueLength; i++) {
            //pop the next node
            const current = queue.shift()
            
            if(current.left) {
                queue.push(current.left)
            }
            if(current.right) {
                queue.push(current.right)
            }
        }
        level += 1
    }
    // maximum depth of a binary tree
    return level
}

// Recursive DFS 
// Time Complexity = O(n)
function maxium_depth_recursive (root) {
    // If root is null return 0
    if (!root) return 0;
    else if ((!root.left) && (!root.right)) return 1;
    else return 1 + Math.max(maxium_depth_recursive(root.left), maxium_depth_recursive(root.right));        
};
    
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
console.log(`Tree Maximum Depth - recursive solution : ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
console.log(`Tree Maximum Depth - recursive solution: ${find_maximum_depth(root)}`);