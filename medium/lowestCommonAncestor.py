# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root:
            return root
        if root == p or root == q:
            return root
        left = self.lowestCommonAncestor(root.left, p, q);
        right = self.lowestCommonAncestor(root.right, p, q);
        if left and right:
            return root
        elif left and not right:
            return left
        else:
            return right


# Runtime
# 187 ms
# Beats
# 24.35%
# Memory
# 26.4 MB
# Beats
# 32.58%

# so slow??
