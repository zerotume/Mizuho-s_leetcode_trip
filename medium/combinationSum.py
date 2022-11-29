class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        dp = [[] for d in range(target+1)];
        for c in candidates:
            if c <= target:
                dp[c].append([c]);
            for i in range(c+1, target+1):
                for res in dp[i - c]:
                    dp[i].append(res+[c]);
        return dp[-1];

# Runtime: 82 ms, faster than 81.10% of Python3 online submissions for Combination Sum.
# Memory Usage: 14 MB, less than 65.97% of Python3 online submissions for Combination Sum.
# Each DP is a solution set for that target value
