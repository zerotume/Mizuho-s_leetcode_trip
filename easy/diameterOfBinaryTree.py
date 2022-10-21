# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        res = self.getDepth(root);
        return res[1];



    def getDepth(self, root: Optional[TreeNode]):
        if not root:
            return [0,0];
        lcd = self.getDepth(root.left);
        rcd = self.getDepth(root.right);
        cd = lcd[0]+rcd[0];
        max_len = max(lcd[1],rcd[1],cd);
        return [max(lcd[0],rcd[0])+1, max_len];


# Runtime: 84 ms, faster than 55.95% of Python3 online submissions for Diameter of Binary Tree.
# Memory Usage: 16.4 MB, less than 43.20% of Python3 online submissions for Diameter of Binary Tree.
# Have to think about:
# why the following version doesn't work?
# I'm confusing...

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class WrongSolution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        res = self.getDepth(root);
        return res[1] - 1;



    def getDepth(self, root: Optional[TreeNode], memo=[0,0]):
        if root.left is None and root.right is None:
            return [1,memo[1]];
        lcd = self.getDepth(root.left)[0] if root.left is not None else 0 ;
        rcd = self.getDepth(root.right)[0] if root.right is not None else 0;
        max_len = max(memo[1], lcd+rcd+1);
        return [max(lcd,rcd)+1, max_len];
