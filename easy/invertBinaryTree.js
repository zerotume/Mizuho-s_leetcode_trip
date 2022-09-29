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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if(!root)return null;
    const newRoot = new TreeNode();
    newRoot.val = root.val;
    traversalAndCopy(root, newRoot);
    return newRoot;
};

function traversalAndCopy(node, anotherNode){
    if(node.left !== null){
        let newRight = new TreeNode();
        newRight.val = node.left.val;
        anotherNode.right = newRight;
        traversalAndCopy(node.left, newRight);
    }
    if(node.right !== null){
        let newLeft = new TreeNode();
        newLeft.val = node.right.val;
        anotherNode.left = newLeft;
        traversalAndCopy(node.right, newLeft)
    }
}

//Runtime: 114 ms, faster than 11.12% of JavaScript online submissions for Invert Binary Tree.
//Memory Usage: 42.6 MB, less than 29.44% of JavaScript online submissions for Invert Binary Tree.
// ONE TIME PASS!
// ...actually first time a typo....
// but so happy! my logic works well!
