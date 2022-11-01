/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  if(!s)return 0;
  if(s.length < 2)return 1;
  let left = 0;
  let right = 0;
  let visited = {};
  res = 1;
  visited[s[left]] = true;
  while (left < s.length){
    if(right + 1 < s.length && !visited[s[right+1]]){
      visited[s[right+1]] = true;
      right += 1;
    }else{
      visited[s[left]] = false;
      left += 1;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};

// Runtime: 125 ms, faster than 82.30% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 48.8 MB, less than 35.21% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// expecting an DP solution
