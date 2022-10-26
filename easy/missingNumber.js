/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let sum = 0;
    let len = nums.length
    for(let num of nums){
        sum += num;
    }
    return (1 + len) * len / 2 - sum;
};

// Runtime: 107 ms, faster than 63.27% of JavaScript online submissions for Missing Number.
// Memory Usage: 44.3 MB, less than 61.07% of JavaScript online submissions for Missing Number.
// Sadly, XOR runs faster than Gaussian Sum....
