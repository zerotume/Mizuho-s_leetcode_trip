"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    """
    @param intervals: an array of meeting time intervals
    @return: if a person could attend all meetings
    """
    def can_attend_meetings(self, intervals: List[Interval]) -> bool:
        # Write your code here
        sorted = intervals.sort(key=lambda x:x.start);
        for i in range(len(intervals) - 1):
          if intervals[i].end > intervals[i+1].start:
            return False;
        return True;

# 162 ms
# time cost
# ·
# 9.13 MB
# memory cost
# ·
# Your submission beats
# 96.00 %
# Submissions

# pay-wall for this problem in leetcode, so I used lintcode
# The biggest thing is firstly sort it
# some logic like pre-processing?
