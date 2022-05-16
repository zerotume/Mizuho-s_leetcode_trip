/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length === 1)return strs[0];
    let obj = {};
    for(let i = 0; i < strs[0].length; i++){
        obj[strs[0].slice(0,i+1)] = true;
    }
    let common = "";
    for(let i = 1; i < strs.length; i++){
        let flag = false;
        let subcommon = '';
        for(let j = 0; j < strs[i].length; j++){
            let sub = strs[i].slice(0, j+1);
            if(obj[sub]){
                subcommon = sub;
                flag = true;
            }
        }
        if(!flag)return '';
        if(subcommon.length < common.length || i === 1)common = subcommon;
    }
    return common;
};

// Runtime: 77 ms, faster than 64.12% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 43.8 MB, less than 25.47% of JavaScript online submissions for Longest Common Prefix.
// submitted 5 times and passed wtf
