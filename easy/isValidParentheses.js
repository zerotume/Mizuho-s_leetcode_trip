/**
 * @param {string} s
 * @return {boolean}
 */
 var isValidParentheses = function(s) {
     /* Version 2*/
     let obj = {'(':'1', ')':-1, '[':2, ']':-2, '{':3, '}':-3};
    let arr = [];
    //arr.push(s[0]);
    for(let i = 0; i < s.length; i++){
        let e = obj[s[i]];
        if(e > 0)arr.push(s[i]);
        else if(e < 0 && obj[arr.pop()]/e !== -1){
            return false;
        }
    }
    if(arr.length === 0)return true;
    else                return false;


    //Runtime: 68 ms, faster than 78.36% of JavaScript online submissions for Valid Parentheses.
    //Memory Usage: 41.6 MB, less than 98.83% of JavaScript online submissions for Valid Parentheses.
    // return arr.length?false:true will make it slower????
};
/*  Version 1 */
/*
let obj = {'(':1, ')':-1, '[':2, ']':-2, '{':3, '}':-3};
let arr = [];
arr.push(s[0]);
for(let i = 1; i < s.length; i++){
   debugger;
   if(arr.length === 0){
       arr.push(s[i]);
       continue;
   }
   let curr = obj[s[i]];
   let prev = obj[arr[arr.length - 1]];
   if(arr.length > 0){
       if(curr / prev > 0){
           arr.push(s[i]);
           continue;
       }

       if(curr / prev === -1 && curr < 0){
           arr.pop();
           continue;
       }else if(curr / prev < 0){
           return false;
       }
   }
}
if(arr.length === 0)return true;
else                return false;


// Runtime: 100 ms, faster than 26.28% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 42.6 MB, less than 25.41% of JavaScript online submissions for Valid Parentheses.
//??? 100 ms fater than 26.28%?????
*/
