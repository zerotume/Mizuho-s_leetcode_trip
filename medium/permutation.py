class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = [];
        self.recursion(nums, [], res);
        return res;

    def recursion(self, nums, memo, res):
        if not nums:
            res.append(memo)

        for i,n in enumerate(nums):
            nums.pop(i);
            self.recursion(nums.copy(), memo + [n], res);
            nums.insert(i,n);


# Runtime
# 68 ms
# Beats
# 67.74%
# Memory
# 14.1 MB
# Beats
# 60.10%
# enumerate: advenced
# looping into anyone, take one, run in the deep, until nothing inside
# a super nested loop in the sub recursions
