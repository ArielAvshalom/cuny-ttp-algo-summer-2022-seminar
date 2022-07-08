// Problem Statement #

// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

// Example
// -----
// targetSum = 12
// Output = [ [ 1, 7, 4 ], [ 1, 9, 2 ] ]
//      1
//     / \
//    7   9
//  / |   | \
// 4  5   2  7

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_paths = function(root, sum) {
  allPaths = [];
  // TODO: Write your code here
  return allPaths;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)


/* Solution
var pathSum = function(root, targetSum) {
    return findSum(root,0,targetSum,[]);
};

let findSum = function(root, sum, targetSum,...arr) {
    let nodeArr = [],leftArr, rightArr;
    if(root == null) return nodeArr;
    if(root.left == null && root.right == null) {
        if( (sum + root.val) == targetSum) {
            arr.push(root.val);
            nodeArr.push([...arr.flat(Infinity)]);
            return nodeArr;
        }
    }
    else {
        arr.push(root.val);
        leftArr = findSum(root.left, sum + root.val, targetSum,arr);
        leftArr = leftArr.flat(0);
        leftArr.forEach(val => {
                nodeArr.push(val);
            });
        rightArr = findSum(root.right, sum + root.val, targetSum, arr);
        rightArr = rightArr.flat(0);
        rightArr.forEach(val => {
                nodeArr.push(val);
            });
    }
    return nodeArr;
}



 */