/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length;
    const n = board[0].length;

    const dirs = [
        [-1,-1], [-1,0], [-1,1],
        [ 0,-1],          [ 0,1],
        [ 1,-1], [ 1,0], [ 1,1]
    ];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let liveNeighbors = 0;

            for (const [dx, dy] of dirs) {
                const x = i + dx;
                const y = j + dy;
                if (x >= 0 && x < m && y >= 0 && y < n) {
                    if (Math.abs(board[x][y]) === 1) {
                        liveNeighbors++;
                    }
                }
            }

            if (board[i][j] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[i][j] = -1; 
            }
            if (board[i][j] === 0 && liveNeighbors === 3) {
                board[i][j] = 2;  
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = board[i][j] > 0 ? 1 : 0;
        }
    }
};
