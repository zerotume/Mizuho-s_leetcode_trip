const longestNonRepeatingSubstring = function (string) {
    if(!string)return 0;
    if(string.length < 2)return 1;
    let left = 0;
    let right = 0;
    let visited = {};
    res = 1;
    visited[string[left]] = true;
    while (left < string.length){
      if(right + 1 < string.length && !visited[string[right+1]]){
        visited[string[right+1]] = true;
        right += 1;
      }else{
        visited[string[left]] = false;
        left += 1;
      }
      res = Math.max(res, right - left + 1);
    }
    return res;
  };

  //from AA assessment, will check my time/space later
