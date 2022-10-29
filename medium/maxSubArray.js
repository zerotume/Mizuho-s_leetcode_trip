/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let currSum = 0;
    let maxSum = -Infinity;
    for(let i = 0; i < nums.length; i++){
        currSum += nums[i];
        if(currSum > maxSum){
            maxSum = currSum;
        }

        if(currSum < 0){
            currSum = 0;
        }
    }
    return maxSum;
};

// Runtime: 97 ms, faster than 85.58% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 50.6 MB, less than 32.90% of JavaScript online submissions for Maximum Subarray.
// when a sum is smaller than 0, it means that adding current subarray will make a negative impact
// and the previous one is the last positive we found
// so start with the next one.
