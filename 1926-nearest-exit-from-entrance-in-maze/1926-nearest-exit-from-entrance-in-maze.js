/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze.length, n = maze[0].length;
    const [er, ec] = entrance;
    const queue = [[er, ec, 0]];
    maze[er][ec] = '+';
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    while (queue.length) {
        const [r, c, steps] = queue.shift();
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
            if (maze[nr][nc] !== '.') continue;
            if (nr === 0 || nr === m - 1 || nc === 0 || nc === n - 1) return steps + 1;
            maze[nr][nc] = '+';
            queue.push([nr, nc, steps + 1]);
        }
    }
    return -1;
};
