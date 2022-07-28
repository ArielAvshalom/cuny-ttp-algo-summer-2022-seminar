class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


function find_maximum_depth(root) {
    if (root === null) {return 0;}
    
    let stack = [];
    if (root != null) {
        stack.push([1, root]);
    }
    let depth = 1;
    while (stack[0] != null) {
        let a = stack.pop();
        let currDepth = a[0];
        let root = a[1];
        if (root != null) {
            depth = Math.max(depth, currDepth);
            stack.push([currDepth + 1, root.left]);
            stack.push([currDepth + 1, root.right]);
        }
    }
    
    return depth;
};



const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
