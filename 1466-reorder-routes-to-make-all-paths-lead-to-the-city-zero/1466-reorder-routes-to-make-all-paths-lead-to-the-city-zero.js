/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const graph = new Array(n).fill(0).map(() => []);
    
    for (let [a, b] of connections) {
        graph[a].push([b, 1]); 
        graph[b].push([a, 0]); 
    }

    let count = 0;

    function dfs(node, parent) {
        for (let [next, needsChange] of graph[node]) {
            if (next !== parent) {
                count += needsChange;
                dfs(next, node);
            }
        }
    }

    dfs(0, -1);
    return count;
};
