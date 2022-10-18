/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n, memo = []) {
    if(n <= 1)return 1;
    if(n === 2)return 2;
    if(memo[n] !== undefined)return memo[n];

    memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    return memo[n];
};




// Runtime: 71 ms, faster than 81.75% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 42.2 MB, less than 18.02% of JavaScript online submissions for Climbing Stairs.
// Should be O(n) time... maximum call stack O(N) and N size array, why so much space?


/**
 * So, DP problem with recursion should be:
 *   -base cases, which are the already known answer (like the first 2 elements in fib, or the first 2 stairs in this question)
 *   -how to calculate the answer of this state
 *   -and remember to record this answer to memo
 *   -then return the answer
 *   -finally, wish it works
 *
 *
 *
 *
 *  -Yeah!
 */
