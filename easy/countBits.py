class Solution:
    def countBits(self, n: int) -> List[int]:
        res = [0];
        for i in range(1, n+1, 1):
            #res.append(i%2 + res[int(i/2)]);
            res.append(i%2 + res[i>>1]);
        return res;

# Runtime: 91 ms, faster than 91.52% of Python3 online submissions for Counting Bits.
# Memory Usage: 20.8 MB, less than 79.25% of Python3 online submissions for Counting Bits.
# See the commented int(i/2) part?
# >> is much faster than int(i/2)
# that's why it is faster than 91.52%! 229=>91
# and the logic is
# the quantity of 1 in a number
# is the last number of it, plus the 1 quantity of it's floored half
# because the last number of it means odd or even
# depends on whether it is xxxx1 or xxxx0
