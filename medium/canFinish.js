/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    if(!prerequisites.length)return true;
    let graph = new Array(numCourses);
    for(let i = 0; i < graph.length; i++){
        graph[i] = [];
    }
    for(let ele of prerequisites){
        if(ele[0] === ele[1]){
            return false;
        }
        graph[ele[0]].push(ele[1]);
    }

    let visited = new Set();
    let visiting = new Set();
    for(let i = 0; i < graph.length; i++){
        if(!graph[i].length)continue;
        if(hasCycle(graph, i, visited, visiting))return false;
    }

    return true;
};


function hasCycle(graph, vert, visited, visiting){
    if(visited.has(vert))return false;
    if(visiting.has(vert))return true;

    visiting.add(vert);
    for(let ele of graph[vert]){
        if(hasCycle(graph,ele,visited,visiting))return true;
    }
    visiting.delete(vert);
    visited.add(vert);
    return false;
}

// Runtime: 126 ms, faster than 65.38% of JavaScript online submissions for Course Schedule.
// Memory Usage: 47.1 MB, less than 67.27% of JavaScript online submissions for Course Schedule.
// really ran into the wrong way wtf
// should consider recursion first
// nooooooooooooooooo
// So the key point is: it is an directed, non-fully-connected graph
// when it has a cycle it is a round-reference
// so it will be a "cannot finish" condition.
