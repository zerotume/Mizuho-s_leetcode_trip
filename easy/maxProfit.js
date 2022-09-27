/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let currMin = Infinity;
    let maxPro = -Infinity;
    for (let num of prices){
        if(num < currMin){
            currMin = num
        }else{
            maxPro = Math.max(num-currMin, maxPro);
        }
    }

    return Math.max(0, maxPro);
};


// Runtime: 154 ms, faster than 24.06% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 52.3 MB, less than 8.54% of JavaScript online submissions for Best Time to Buy and Sell Stock.

// WAT??
// the logic is:
// when you find a smaller one, you can record it as the current minimum
// when you find a bigger one, you can check whether the difference than the smaller one is the biggest profit
// And the iteration is from left to the right
// which means that we could maintain the "time" --- old to new -- order
// to proof the validity, maybe we need a proof by contradiction?
// try it:
// if we find a result P, which is not the maximum profit
// which means it is the difference of two values, Vmin, Vmax, with their index Imin, Imax
// so when it is not the maximum profit, there must be another one, called P'
// and V'min, V'max, I'min, I'max
// and P stuff is not same to P' stuff
// so when looking from the left to the right
// if I'min < Imin, and I'max < Imax
// there shouldn't be an Imax
// since we didn't found a bigger profit
// if I'min < Imin, and I'max > Imax
// looks like this time V'min is not smaller then Vmin so why we didn't overwrite it
// if I'min > Imin
// this time I'min must be the same as Imin since it is after and smaller
// all contradiction
