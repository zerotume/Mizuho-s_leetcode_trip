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
 var isValidBST = function(root, min=-Infinity, max=Infinity) {
    if(root === null)return true;
    if(root.val > min && root.val < max){
        return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
    }
    return false;
};

// Runtime: 128 ms, faster than 29.62% of JavaScript online submissions for Validate Binary Search Tree.
// Memory Usage: 46.3 MB, less than 50.05% of JavaScript online submissions for Validate Binary Search Tree.
// wat? short code, longer time????
