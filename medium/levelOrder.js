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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root)return [];
    let res = [[root.val]];
    let queue = [root];
    let currLevel = 0;
    let currLevNum = 1;
    while(queue.length){
        //console.log(currLevNum);
        let currRes = [];
        currLevel++;
        let nextLevNum = 0;
        while(currLevNum > 0){
            let top = queue.shift();
            if(top.left){
                queue.push(top.left);
                currRes.push(top.left.val);
                nextLevNum++;
            }
            if(top.right){
                queue.push(top.right);
                currRes.push(top.right.val);
                nextLevNum++;
            }
            currLevNum --;
        }
        if(currRes.length)res.push(currRes);
        currLevNum = nextLevNum;
    }
    return res;
};

// Runtime: 104 ms, faster than 57.85% of JavaScript online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 44.4 MB, less than 42.78% of JavaScript online submissions for Binary Tree Level Order Traversal.
// trickier solution: just use the heap...
