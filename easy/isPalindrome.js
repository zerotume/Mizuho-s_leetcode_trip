/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str = x.toString();
    let i = 0;
    let j = str.length - 1;
    while(j >= i){
        if(str[i] !== str[j])return false;
        i++;
        j--;
    }
    return true;
};

// Runtime: 302 ms, faster than 25.05% of JavaScript online submissions for Palindrome Number.
//??????????????
// Memory Usage: 51.1 MB, less than 58.92% of JavaScript online submissions for Palindrome Number.
// (from other ones solution:
//     num % 10 === 0 -> last digit is 0, return false
//     .split('').reverse().join('') and compare
//     I'm So Fxxxixx Sxxxxd
//     )
