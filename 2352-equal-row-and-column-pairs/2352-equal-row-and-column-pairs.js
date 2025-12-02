/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length;
    const map = new Map();

    for (let row of grid) {
        const key = row.join(",");
        map.set(key, (map.get(key) || 0) + 1);
    }

    let count = 0;

    for (let c = 0; c < n; c++) {
        let col = [];
        for (let r = 0; r < n; r++) {
            col.push(grid[r][c]);
        }
        const key = col.join(",");
        if (map.has(key)) count += map.get(key);
    }

    return count;
};
