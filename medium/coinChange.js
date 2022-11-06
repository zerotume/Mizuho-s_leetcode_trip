/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    if(amount===0)return 0;
    const dp = Array(amount+1).fill(amount+1);

    dp[0] = 0;
    for(let i = 1; i <= amount; i++){
        for(let coin of coins){
            if(i - coin >= 0 && dp[i-coin] <= amount){
                dp[i] = Math.min(dp[i], dp[i-coin]+1);
            }
        }
    }
    if(dp[amount] === amount + 1)dp[amount]=-1;
    return dp[amount];
};

// Runtime: 248 ms, faster than 35.39% of JavaScript online submissions for Coin Change.
// Memory Usage: 46 MB, less than 75.32% of JavaScript online submissions for Coin Change.
// so the key point is building the transition equition
// like fib
// the transition is "how many coins for this amount"
// so f(n) = f(min{coin1, coin2, ... coinn})+1;
