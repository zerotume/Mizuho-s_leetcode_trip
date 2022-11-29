
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l = 0;
        h = len(nums) - 1;
        while l < h:
            mid = (l+h) // 2;
            if nums[mid] > nums[h]:
                l = mid + 1;
            else:
                h = mid;
        offset = l;
        l = 0;
        h = len(nums) - 1;
        while l <= h:
            mid = (l + h) // 2;
            actual = (mid + offset) % len(nums);
            if nums[actual] == target:
                return actual;
            elif nums[actual] > target:
                h = mid - 1;
            else:
                l = mid + 1;
        return -1;

# Runtime: 80 ms, faster than 57.29% of Python3 online submissions for Search in Rotated Sorted Array.
# Memory Usage: 14.4 MB, less than 18.64% of Python3 online submissions for Search in Rotated Sorted Array.
# This logic.... complex
