class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        if len(nums)==1:
            return False;
        d = {};
        for i in range(len(nums)):
            if nums[i] in d:
                return True
            else:
                d[nums[i]] = 1;
        return False;

# Runtime: 579 ms, faster than 78.28% of Python3 online submissions for Contains Duplicate.
# Memory Usage: 26 MB, less than 67.00% of Python3 online submissions for Contains Duplicate.
# 579ms??? WAT HAPPENED?
