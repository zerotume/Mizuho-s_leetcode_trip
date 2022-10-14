/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
    if(!root)return true;
    if(!root.left && !root.right) return true;
    if(!root.left && root.right)return getDepth(root.right)<=1;
    if(!root.right && root.left)return getDepth(root.left)<=1;
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(getDepth(root.left)-getDepth(root.right))<=1
};

let getDepth = function(node, dep=1){
    if(!node.left && !node.right) return dep;
    if(!node.left) return getDepth(node.right, dep+1)
    if(!node.right) return getDepth(node.left, dep+1)
    return Math.max(getDepth(node.left, dep+1), getDepth(node.right, dep+1));
}

// Runtime: 76 ms, faster than 94.27% of JavaScript online submissions for Balanced Binary Tree.
// Memory Usage: 46.8 MB, less than 88.51% of JavaScript online submissions for Balanced Binary Tree.
// First timmmme beeeeettteerrr thhhhhannnn oooottthhheerrss mmmmeoooooowwww
// Acutally one factor is the leetcode system doesn't support the memo solution
// otherwise memo solution with only one function might be the best...?
