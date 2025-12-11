/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let fresh = 0;
    const queue = [];

    // Step 1: Count fresh oranges & push rotten oranges into queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) fresh++;
            if (grid[i][j] === 2) queue.push([i, j, 0]); // r, c, minute
        }
    }

    // No fresh oranges
    if (fresh === 0) return 0;

    let minutes = 0;
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    // Step 2: Multi-source BFS
    while (queue.length > 0) {
        const [r, c, time] = queue.shift();
        minutes = Math.max(minutes, time);

        for (let [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 && nr < m &&
                nc >= 0 && nc < n &&
                grid[nr][nc] === 1
            ) {
                grid[nr][nc] = 2; // rot it
                fresh--;
                queue.push([nr, nc, time + 1]);
            }
        }
    }

    // If fresh oranges still exist → impossible
    return fresh === 0 ? minutes : -1;
};
