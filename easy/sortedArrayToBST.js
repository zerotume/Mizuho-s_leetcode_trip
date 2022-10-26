/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    let root = null;
    return arrayBuildBST(nums, root);
}

var arrayBuildBST = function(nums, root){
    if(nums.length === 0)return root;
    let mid = Math.floor(nums.length/2);
    if(!root){
        root = new TreeNode(nums[mid]);
    }
    if(nums.length === 1)return root;
    let leftArr = nums.slice(0,mid);
    let rightArr = nums.slice(mid+1);
    root.left = arrayBuildBST(leftArr, null);
    root.right = arrayBuildBST(rightArr, null);
    return root;
}

// Runtime: 132 ms, faster than 30.53% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
// Memory Usage: 44.4 MB, less than 63.16% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
// process exited with signal sigsegv first time....
// because of forgot line 19
// an wild pointer or something?
// looks like a lot of operations based on some wild references.......
// after added it passed
