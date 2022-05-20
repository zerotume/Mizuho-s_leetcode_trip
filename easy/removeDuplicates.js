//don't look at this, not finished!
//don't look at this, not finished!
//don't look at this, not finished!
//don't look at this, not finished!
//don't look at this, not finished!
//don't look at this, not finished!
//don't look at this, not finished!

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    //let first = nums[0];
    let i = 1;
    while(nums[i] === nums[0]){
        i++;
    }
    if(nums[i] === undefined)return [nums[0]];
    let diff = nums[i] - nums[0];
    let k = (nums[nums.length - 1] - nums[0]) / diff + 1
    for(let j = 0; j < k; j++){
        nums[j] = nums[0] + j * diff;
    }
    return k
};


let nums = [0,0,0,0,0]; // Input array
let expectedNums = []; // The expected answer with correct length

let k = removeDuplicates(nums); // Calls your implementation

console.log(nums.slice(0,k));

//don't look at this, not finished!
//don't look at this, not finished!
//don't look at this, not finished!
//don't look at this, not finished!
//don't look at this, not finished!
//don't look at this, not finished!
//don't look at this, not finished!
