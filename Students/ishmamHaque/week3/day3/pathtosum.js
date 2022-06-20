//06/15// Problem Statement #
// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
//first gives my answer
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
//let findSum = function(root, sum, targetSum,arr) {
//    let nodeArr = [],leftArr, rightArr;
//    currsum=sum;
//    currarr=arr;
//    if(root == null) return nodeArr;
//    currsum=sum+root.value;
//    currarr.push(root.value);
//    if(currsum==targetSum) return currarr;
//    leftArr=findSum(root.left,currsum,targetSum,currarr);
//    rightArr=findSum(root.right,currsum,targetSum,currarr);
//    if(leftArr!=[]) return leftArr;
//    if(rightArr!=[]) return rightArr;
//    else return []; 
//}
// const pathtoSum = function(root,sum){
//      return findSum(root,0,sum,[]);
// }
const find_paths = function(root, sum) {
  allPaths = [];
  // TODO: Write your code here
  allPaths=pathSum(root,sum);
  //allPaths=pathtoSum(root,sum);
  return allPaths;
};
var pathSum = function(root, targetSum) {
    return findSum(root,0,targetSum,[]);
};
let findSum = function(root, sum, targetSum,arr) {
    let nodeArr = [],leftArr, rightArr;
    if(root == null) return nodeArr;
    if(root.left == null && root.right == null) {
        if( (sum + root.value) == targetSum) {
            arr.push(root.value);
            nodeArr.push([arr.flat(Infinity)]);
            return nodeArr;
        }
    }
    else {
        arr.push(root.value);
        leftArr = findSum(root.left, sum + root.value, targetSum,arr);
        leftArr = leftArr.flat(0);
        leftArr.forEach(value => {
                nodeArr.push(value);
            });
        rightArr = findSum(root.right, sum + root.value, targetSum, arr);
        rightArr = rightArr.flat(0);
        rightArr.forEach(value => {
                nodeArr.push(value);
            });
    }
    return nodeArr;
} 
var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)
