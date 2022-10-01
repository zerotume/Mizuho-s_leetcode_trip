/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while(right - left > 1){
        mid = Math.floor((left + right)/2);
        if(nums[mid] === target){
            return mid;
        }
        if(nums[mid] < target){
            left = mid;
            continue;
        }else{
            right = mid;
            continue;
        }
    }
    if(nums[left] === target){
        return left;
    }else if(nums[right]===target){
        return right;
    }else{
        return -1;
    }
};

//Runtime: 108 ms, faster than 37.80% of JavaScript online submissions for Binary Search.
//Memory Usage: 44.6 MB, less than 91.84% of JavaScript online submissions for Binary Search.
//this is a in-place search not using call stacks
//so good memory usage
//and still O(logN) time
