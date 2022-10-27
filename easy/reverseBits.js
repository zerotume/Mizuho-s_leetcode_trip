/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    let binStr = n.toString(2);
    binStr = '0'.repeat(32-binStr.length)+binStr;
    return parseInt(binStr.split('').reverse().join(''),2);
};

// Runtime: 98 ms, faster than 71.91% of JavaScript online submissions for Reverse Bits.
// Memory Usage: 44.4 MB, less than 23.63% of JavaScript online submissions for Reverse Bits.
// manually reverse a string: use a stack
