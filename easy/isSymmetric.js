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
 var isSymmetric = function(root) {
    if(!root)return true;
    return checkSym(root.left, root.right);
};

let checkSym = (left, right) => {

    if(left === null && right === null){
        return true;
    }else if(left === null || right === null){
        return false;
    }

    if(left.val !== right.val){
        return false;
    }

    return checkSym(left.left, right.right) && checkSym(left.right,right.left);
}

// Runtime: 80 ms, faster than 86.62% of JavaScript online submissions for Symmetric Tree.
// Memory Usage: 44.4 MB, less than 66.32% of JavaScript online submissions for Symmetric Tree.
// funny percent numbers lmao
// so forget the pre-to-post order comparison,
// just reeeeeecurrrrse it!
