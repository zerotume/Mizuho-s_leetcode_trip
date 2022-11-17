/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    let dir = [[0,1],[0,-1],[1,0],[-1,0]]
    let queue = [];
    let rot = 0;
    let round = 0;
    let good = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 2){
                queue.push([i,j]);
                rot++;
            }
            if(grid[i][j] === 1){
                good++;
            }
        }
    }

    while(queue.length){
        //console.log(grid);
        let prev = rot;
        rot = 0;
        while(prev){
            let [cR, cC] = queue.shift();
            for(let [dR, dC] of dir){
                if(cR + dR < grid.length && cR + dR >= 0 && cC + dC < grid[0].length && cC + dC >= 0){
                    if(grid[cR+dR][cC+dC] === 1){
                        grid[cR+dR][cC+dC] = 2;
                        queue.push([cR+dR,cC+dC]);
                        rot++;
                        good--;
                    }
                }
            }
            prev--;
        }
        round++;
    }
    round = round?round-1:0;
    return good?-1:round;
}


// Runtime: 122 ms, faster than 62.17% of JavaScript online submissions for Rotting Oranges.
// Memory Usage: 45.1 MB, less than 49.62% of JavaScript online submissions for Rotting Oranges.
// mistaken read 3 times...
