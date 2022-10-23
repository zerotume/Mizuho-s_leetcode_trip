class Solution:
    def hammingWeight(self, n: int) -> int:
        count = 0;
        while n > 0:
            count += n%2;
            n = n >> 1;
        return count;

# Runtime: 64 ms, faster than 29.27% of Python3 online submissions for Number of 1 Bits.
# Memory Usage: 13.8 MB, less than 94.43% of Python3 online submissions for Number of 1 Bits.
# memory usage lmao
