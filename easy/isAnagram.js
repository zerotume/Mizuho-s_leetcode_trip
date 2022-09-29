/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length)return false;
    let sArr = (s.split('').sort());
    let tArr = (t.split('').sort());
    for(let i = 0; i < s.length; i++){
        if(sArr[i] !== tArr[i])return false;
    }
    return true;
};

//Runtime: 122 ms, faster than 61.46% of JavaScript online submissions for Valid Anagram.
//Memory Usage: 46.8 MB, less than 34.87% of JavaScript online submissions for Valid Anagram.
//misunderstood the problem once... embrassing....
