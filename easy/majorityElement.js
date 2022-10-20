/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let count = 0;
    let cand = -99;
    for(let num of nums){
        if(count === 0)cand = num;
        count += (cand===num?1:-1);
    }
    return cand;
};

// Runtime: 62 ms, faster than 99.22% of JavaScript online submissions for Majority Element.
// Memory Usage: 43.5 MB, less than 79.52% of JavaScript online submissions for Majority Element.
// ahhhh soooo good
// The Boyer-Moore Majority Vote Algorithm is so brilliant... great trick on the Peano System
