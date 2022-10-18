/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    let odded = false;
    let res = 0;
    const memo = {};
    for(let c of s){
        if(memo[c]){
            memo[c]++;
        }else{
            memo[c] = 1;
        }
    }

    for(let c in memo){
        if(memo[c] % 2 === 1){
            if(!odded){
                res += memo[c];
                odded = true;
            }else{
                res += (memo[c] - 1);
            }
        }else{
            res += memo[c]
        }
    }

    return res;
};


// Runtime: 140 ms, faster than 7.54% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 44.5 MB, less than 31.42% of JavaScript online submissions for Longest Palindrome.
// WAT????
