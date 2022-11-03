/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
    if(!node)return node;
    let visited = {};
    let queue = [node];
    let n = [];
    let top = null;
    visited[node.val] = new Node(node.val,[]);
    while(queue.length){
        top = queue.shift();
        n = [];
        for(let ele of top.neighbors){
            if(visited[ele.val] === undefined){
                visited[ele.val] = new Node(ele.val);
                queue.push(ele);
            }
            n.push(visited[ele.val]);
        }
        visited[top.val].neighbors = n;
    }

    return visited[node.val];
};

// Runtime: 104 ms, faster than 53.16% of JavaScript online submissions for Clone Graph.
// Memory Usage: 43.8 MB, less than 67.00% of JavaScript online submissions for Clone Graph.
// remember, deep copy
// so use a k-v POJO to save the new nodes
