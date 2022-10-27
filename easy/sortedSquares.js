/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    return nums.map(e => e**2).sort((a,b) => a-b)
};

// Runtime: 192 ms, faster than 41.64% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 48.9 MB, less than 29.80% of JavaScript online submissions for Squares of a Sorted Array.
// Tim sort, um?
