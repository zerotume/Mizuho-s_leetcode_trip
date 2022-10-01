/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    const pPath = binarySearchArr(root, p.val);
    const qPath = binarySearchArr(root, q.val);
    let startPoint = Math.min(pPath.length, qPath.length) - 1;
    while(startPoint >= 0){
        if(pPath[startPoint] === qPath[startPoint]){
            return pPath[startPoint];
        }
        startPoint--;
    }
};

var binarySearchArr = function(current, target, arr = []){
    arr.push(current);
    if(current.val === target)return arr;
    if(current.val > target)return binarySearchArr(current.left, target, arr);
    else return binarySearchArr(current.right, target, arr);
};


// Runtime: 158 ms, faster than 13.10% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// Memory Usage: 51.3 MB, less than 99.00% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.

// Super memory use!!!
// BIG HINT:
// Look at line 13, it tells you what it want you to return
// that's important when you're using JS for this questions.
// if you return a number it will be undefined.
