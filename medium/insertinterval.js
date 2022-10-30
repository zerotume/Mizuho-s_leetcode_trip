/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    if(intervals.length === 0)return [newInterval];
    let res = [];
    let pushed = false;
    for(let ele of intervals){
        if(newInterval[1] < ele[0] && !pushed){
            res.push(newInterval);
            pushed = true;
        }
        if(newInterval[1] < ele[0] || newInterval[0] > ele[1]){// not overlapping
            res.push(ele);
        }else{
            newInterval[0] = Math.min(newInterval[0], ele[0]);
            newInterval[1] = Math.max(newInterval[1], ele[1]);

        }
    }
    if(!pushed)res.push(newInterval);
    return res;
};


// Runtime: 130 ms, faster than 31.46% of JavaScript online submissions for Insert Interval.
// Memory Usage: 43.7 MB, less than 97.49% of JavaScript online submissions for Insert Interval.
// too many edge cases at the first thinking
// however, only 2 actually:
//   1. not pushed the newInterval
//   2. pushed the new interval
// when the new interval overlapes everyone
// finally it wont be pushed
// because it pushes at the beginning
// but in this case
// we will exit the for loop after overlapping everyone
// so just check whether it is pushed here
// is good
// I'm so fxxking sxxxxd
