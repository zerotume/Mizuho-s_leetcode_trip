/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
    let rowLen = mat[0].length;
    let colLen = mat.length;
    if(colLen === 0)return mat;
    if(rowLen === 1 && colLen === 1)return [[0]];
    let res = [];
    for(let i = 0; i < colLen; i++){
        res.push(Array(rowLen).fill(10005));
    }

    //let currentSmallest = 0;
    //let queue = [mat[0][0]];

    for(let i = 0; i < colLen; i++){
        for(let j = 0; j < rowLen; j++){
            if(mat[i][j] === 0){
                res[i][j] = 0;
            }else{
                if(i > 0){
                    res[i][j] = Math.min(res[i][j], res[i-1][j] + 1)
                }
                if(j > 0){
                    res[i][j] = Math.min(res[i][j], res[i][j-1] + 1);
                }
            }
        }
    }

    for(let i = colLen - 1; i >= 0; i--){
        for(let j = rowLen - 1; j >= 0; j--){
            if(i + 1 < colLen){
                res[i][j] = Math.min(res[i][j], res[i+1][j]+1);
            }
            if(j + 1 < rowLen){
                res[i][j] = Math.min(res[i][j], res[i][j+1]+1);
            }
        }
    }

    return res;
};

/*
var getNeighbours = function(rowLen, colLen, i, j){
    let res = [];
    if(i - 1 >= 0)res.push([i-1,j]);
    if(j - 1 >= 0)res.push([i, j-1]);
    if(i + 1 < colLen)res.push([i+1, j]);
    if(j + 1 < rowLen)res.push([i, j+1]);

    return res;
}

*/

// Runtime: 150 ms, faster than 96.45% of JavaScript online submissions for 01 Matrix.
// Memory Usage: 50.5 MB, less than 79.08% of JavaScript online submissions for 01 Matrix.
// two time pass:
// lefttop -> bottomdown, initializing zeros, and getting the smallest of self, upper and lefter neighbourhood
// bottomdown->lefttop, getting the smallest of self, lower and righter neighbourhood
// why cannot one time pass?
// e.g for lefttop, if we want to compare with upper and lefter
// we need upper and lefter calculated
// it is, because we calculate it from lefttop to bottom down
// however, this time lower and righter is not calculated
// if we just use it it will be weird outputs
// so we need another pass
