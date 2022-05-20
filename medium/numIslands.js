/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    debugger;
    let visited = new Set();
    let count = 0;

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === "1" && !visited.has([i,j].toString())){
                let stack = [[i,j]];
                count++;
                while(stack.length){
                    let head = stack.pop();
                    let neighbours = findNeighbours(head, grid);
                    for(let ele of neighbours){
                        if(!visited.has(ele.toString())){
                            visited.add(ele.toString());
                            stack.push(ele);
                        }
                    }
                }
            }
        }
    }
    return count;
};

function findNeighbours(node, matrix){
    let row = node[0];
    let col = node[1];
    let res = [];

    if(row - 1 >= 0 && matrix[row - 1][col] === "1")res.push([row - 1,col]);
    if(row + 1 < matrix.length && matrix[row + 1][col] === "1")res.push([row + 1,col]);
    if(col - 1 >= 0 && matrix[row][col - 1] === "1")res.push([row,col - 1]);
    if(col + 1 <matrix[0].length && matrix[row][col + 1] === "1")res.push([row,col + 1]);

    return res;
}

//a logically clear solution, without using callstacks(recursion) and in-place marks
//if using recursion and in-place marks it will be faster;
