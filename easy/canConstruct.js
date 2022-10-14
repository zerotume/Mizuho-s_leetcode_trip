/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length)return false;
    const obj = {};
    for(let c of magazine){
        if(obj[c]){
            obj[c]++;
        }else{
            obj[c] = 1;
        }
    }

    for(let r of ransomNote){
        if(obj[r]){
            obj[r]--;
        }else{
            return false;
        }
    }
    return true;
};


// Runtime: 117 ms, faster than 72.42% of JavaScript online submissions for Ransom Note.
// Memory Usage: 44.7 MB, less than 68.06% of JavaScript online submissions for Ransom Note.
// one time pass, ez ggwp
// then eliminated one edge case, 30ms faster...
