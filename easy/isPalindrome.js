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

var isPalindromeNoneStr = function(x) {
    if(x < 0)return false;
    if(x === 0)return true;
    let octBits = Math.floor(Math.log(x)/Math.log(10));
    let mid = octBits/2;
    let checkedBits = 0;
    while(checkedBits < mid){
        if(
                    (Math.floor(x/(10**(octBits-checkedBits))) % 10) !==
                    Math.floor((x % (10**(checkedBits+1))) / (10 ** checkedBits))
        ){
            return false;
        }
        checkedBits++;
    }
    return true;
}

// Runtime: 296 ms, faster than 64.77% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 51.2 MB, less than 50.78% of JavaScript online submissions for Palindrome Number.
// No converting to string
// Sooooooooooo comfortable!!!!
