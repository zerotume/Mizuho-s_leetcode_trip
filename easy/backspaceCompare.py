class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        p1 = len(s)-1;
        p2 = len(t)-1;
        acc1 = 0;
        acc2 = 0;
        while p1 >= 0 or p2 >= 0:
            while p1 >= 0:
                if s[p1] == '#':
                    acc1 += 1;
                    p1 -= 1;
                elif acc1 > 0:
                    acc1 -= 1;
                    p1 -= 1;
                elif acc1 == 0:
                    break;
            while p2 >= 0:
                if t[p2] == '#':
                    acc2 += 1;
                    p2 -= 1;
                elif acc2 > 0:
                    acc2 -= 1;
                    p2 -= 1;
                elif acc2 == 0:
                    break;
            if p1 >= 0 and p2 >= 0 and s[p1] != t[p2]:
                return False;
            if (p1 >= 0) is not (p2 >= 0):
                return False;
            p1 -= 1;
            p2 -= 1;
        return True;

# Runtime: 42 ms, faster than 78.74% of Python3 online submissions for Backspace String Compare.
# Memory Usage: 13.9 MB, less than 74.82% of Python3 online submissions for Backspace String Compare.
# Directly goes into the double pointer solution
# we might be dive deep into too many edge cases
# in my previous idea
# this one make it easier
# because the loop will kill the case that #s left in the string
# so finally we have some cases:
# 1. found something different in the middle
# which means has difference
# and returns false
# 2. both finished with nothing left
# which means two are all <= 0
# it is true because we didn't found conflicts
# 3. one left something, one finished with nothing
# which means the actual string is one empty, and one not empty
# it is false because empty string cannot be equal to non-empty string
# and WTF is the python solution????
# zip_longest is using O(1) space????
# https://stackoverflow.com/questions/68195520/time-complexity-of-zip-longest
