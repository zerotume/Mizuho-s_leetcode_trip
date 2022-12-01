class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        i, j = 0, 1;
        start_time = lambda x:x[0];
        intervals.sort(key=start_time);
        # overlap = false;
        while j < len(intervals):
            if intervals[i][1] >= intervals[j][0]:
                newInterval = [intervals[i][0], max(intervals[i][1], intervals[j][1])];
                intervals[j] = newInterval;
                intervals.pop(i);
            else:
                i += 1;
                j += 1;

        return intervals;



# Runtime: 191 ms, faster than 77.50% of Python3 online submissions for Merge Intervals.
# Memory Usage: 18.2 MB, less than 54.12% of Python3 online submissions for Merge Intervals.
# faster than imagined
