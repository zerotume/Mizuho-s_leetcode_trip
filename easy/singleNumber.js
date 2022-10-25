/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let res = 0;
    for(let num of nums){
        res ^= num;
    }
    return res;
};


// Runtime: 89 ms, faster than 84.82% of JavaScript online submissions for Single Number.
// Memory Usage: 44.8 MB, less than 63.00% of JavaScript online submissions for Single Number.
// bit operator, so helpful, should review
