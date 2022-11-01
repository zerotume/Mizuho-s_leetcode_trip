/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    if(points.length === 1)return points;
    let res = points.sort((a,b) =>
                        Math.sqrt(a[0]**2 + a[1]**2)
                        - Math.sqrt(b[0]**2 + b[1]**2));
    return res.slice(0,k)
};

// Runtime: 388 ms, faster than 53.42% of JavaScript online submissions for K Closest Points to Origin.
// Memory Usage: 60.3 MB, less than 67.88% of JavaScript online submissions for K Closest Points to Origin.
// just a sort...
