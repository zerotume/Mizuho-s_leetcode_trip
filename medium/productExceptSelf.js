/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function (nums) {
    // Your code here
    let res = [];
    let front = 1;
    for(let i = 0; i < nums.length; i++){
      res.push(front);
      front = front * nums[i];
    }

    let back = 1;
    for(let i = nums.length - 1; i >= 0; i--){
      res[i] = res[i]*back;
      back = back * nums[i];
    }
    return res;
  };

  //from a/A assessment, will update time and space later
  //yeah
