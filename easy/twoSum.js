/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let obj = {};
    for(let i = 0; i <= nums.length; i++){
        let ind = target - nums[i];
        if(ind in obj)return [obj[ind], i];
        obj[nums[i]] = i;
    }

    return '';

//  Runtime: 83 ms, faster than 76.14% of JavaScript online submissions for Two Sum.
//  Memory Usage: 42.9 MB, less than 41.06% of JavaScript online submissions for Two Sum.
};
