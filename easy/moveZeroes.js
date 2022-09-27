/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let nonCount = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0){
            nonCount++;
        }
    }


    if(nonCount === 0) return nums;
    if(nonCount === nums.length) return nums;

    let zeroPointer = 0;
    let nonPointer = 0;
    let switchCount = 0;
    let switchLeft = nonCount;


    while(switchLeft > 0 && nonPointer < nums.length && zeroPointer < nums.length){
        if(nums[zeroPointer] !== 0 && nonPointer === zeroPointer){
            zeroPointer++;
            nonPointer++;
            switchLeft--;
            continue;
        }

        if(nums[nonPointer] === 0){
            nonPointer++;
        }

        if(nums[zeroPointer] !== 0){
            zeroPointer++;
        }

        if(nums[nonPointer] !== 0 && nums[zeroPointer] === 0){
            // let temp = nums[nonPointer];
            nums[zeroPointer] = nums[nonPointer];
            nums[nonPointer] = 0
            // switchCount++;
            switchLeft--;
        }

        // console.log('zp', zeroPointer);
        // console.log('zpnum', nums[zeroPointer]);
        // console.log('np', nonPointer);
        // console.log('npnum', nums[nonPointer]);
        // console.log('nums', nums)
        // console.log('--------------------------------------')
    }

    return nums;

};


//Runtime: 173 ms, faster than 22.28% of JavaScript online submissions for Move Zeroes.
//Memory Usage: 46.4 MB, less than 82.96% of JavaScript online submissions for Move Zeroes.

//really small memory usage
//but time, emmmm
