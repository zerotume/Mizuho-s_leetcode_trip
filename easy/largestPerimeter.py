def largestPerimeter(self, nums: List[int]) -> int:
        nums.sort(reverse=True)
        for i in range(len(nums) - 2):
            if(nums[i] < nums[i+1] + nums[i+2]):
                return nums[i] + nums[i+1] + nums[i+2]


        return 0


# Runtime: 350 ms
# Memory Usage: 15.4 MB
# Stucked with the O(n^2) solution for a long time
# And suddenly found:
# Whhhhhyyyy nooooooooooot juuuuuuuust soooooooooorttt itttttttt
# the first 3 edges in the array which satisified
# the a+b>c
# will be the biggest trangle we can make here
# I'm so stupid
