class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True;
        if (not p and q) or (not q and p):
            return False;
        return p.val == q.val and self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)


# Runtime: 55 ms, faster than 52.07% of Python3 online submissions for Same Tree.
# Memory Usage: 14 MB, less than 29.09% of Python3 online submissions for Same Tree.
# Never thought that recursion is such a easy thing
