/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, color) {
    if(image.length === 0)return image;
    originColor = image[sr][sc];
    if(originColor === color) return image;
    const visited = new Set();
    const queue = [[sr, sc]];
    visited.add([sr,sc]);
    while(queue.length){
        let top = queue.shift();
        image[top[0]][top[1]] = color;
        let neighbours = getNeighbours(image, top[0], top[1]);
        for(let ele of neighbours){
            if(!visited.has(ele)){
                visited.add[ele];
                if(image[ele[0]][ele[1]] === originColor){
                    queue.push(ele);
                }
            }
        }
    }
    return image;
};

var getNeighbours = function(image, r, c){
    let res = [];
    if(r + 1 < image.length)res.push([r+1, c]);
    if(r - 1 >= 0)res.push([r-1, c]);
    if(c + 1 < image[0].length)res.push([r, c+1]);
    if(c - 1 >= 0)res.push([r, c-1]);
    return res;
}

// Runtime: 134 ms, faster than 23.68% of JavaScript online submissions for Flood Fill.
// Memory Usage: 44.5 MB, less than 41.08% of JavaScript online submissions for Flood Fill.
// thought it was complex but... ummm... okay.
// just a BFS emmmm
