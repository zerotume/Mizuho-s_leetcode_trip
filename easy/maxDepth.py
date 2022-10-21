# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        return 0 if not root else max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1


# Runtime: 55 ms, faster than 79.11% of Python3 online submissions for Maximum Depth of Binary Tree.
# Memory Usage: 16.2 MB, less than 54.73% of Python3 online submissions for Maximum Depth of Binary Tree.
# One liner proud!!!
