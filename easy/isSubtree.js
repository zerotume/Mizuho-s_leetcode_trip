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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    const queue = [root];
    let top;
    while(queue.length){
        top = queue.shift();
        if(top.left){
            queue.push(top.left);
        }
        if(top.right){
            queue.push(top.right);
        }
        if(sameTree(top, subRoot)){
            return true;
        }
    }
    return false;
};

/*
var findRoot = function(root, value){
    if(root === null)return null;
    if(root.val === value)return root;
    return findRoot(root.left, value) || findRoot(root.right, value);
}
*/

var sameTree = function(root, subRoot){
    if(root === null && subRoot === null){
        return true;
    }else if(root === null || subRoot === null){
        return false;
    }else if(root.val !== subRoot.val){
        return false;
    }

    return sameTree(root.left, subRoot.left) && sameTree(root.right, subRoot.right);
}

// Runtime: 147 ms, faster than 46.67% of JavaScript online submissions for Subtree of Another Tree.
// Memory Usage: 49.8 MB, less than 10.63% of JavaScript online submissions for Subtree of Another Tree.
// I thought it the vals in nodes would be independent....
// So I made a findRoot helper function
// The key is actually "sameTree" happened before
