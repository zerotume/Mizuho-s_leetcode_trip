class Solution:
    def climbStairs(self, n: int, memo={}) -> int:
        if n==1:
            return 1;
        if n==2:
            return 2;
        if n in memo:
            return memo[n];
        memo[n] = self.climbStairs(n-1) + self.climbStairs(n-2);
        return memo[n];



# Runtime: 60 ms, faster than 26.66% of Python3 online submissions for Climbing Stairs.
# Memory Usage: 13.9 MB, less than 57.07% of Python3 online submissions for Climbing Stairs.
# Doing this again in python to make sure I understand this problem.
