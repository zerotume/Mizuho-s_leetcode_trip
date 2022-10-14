/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n===1)return 1;
        let start = 0;
        let end = n;
        let mid = Math.floor((end+start)/2);
        while(end - start > 1){
            if(isBadVersion(mid)){
                end = mid;
            }else{
                start = mid;
            }
            mid = Math.floor((end+start)/2);
        }

        if(isBadVersion(start))return start;
        else return end;
    };
};

// Runtime: 78 ms, faster than 75.41% of JavaScript online submissions for First Bad Version.
// Memory Usage: 41.2 MB, less than 99.20% of JavaScript online submissions for First Bad Version.
// still considering whether I'm an idiot
// why I attempted end-start....
