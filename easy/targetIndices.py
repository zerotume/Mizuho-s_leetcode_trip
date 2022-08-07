def targetIndices(self, nums: List[int], target: int) -> List[int]:
        nums.sort()
        try:
            c = indexOf(nums, target)
        except(ValueError):
            return []
        res = []
        for i in range(c,len(nums),1):
            if(nums[i]==target):
                res.append(i)
            else:
                return res

        return res


# Runtime: 63 ms
# Memory Usage: 14 MB
# totally telling us how to deal with it:
#"after sorting"
# Thanks to the build-in Tim Sort
