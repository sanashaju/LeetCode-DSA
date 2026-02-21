/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    
    let root = {};

    for (let word of words) {
        let node = root;
        for (let char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
        }
        node.word = word; 
    }

    let rows = board.length;
    let cols = board[0].length;
    let result = [];

    function dfs(r, c, node) {
        let char = board[r][c];

        if (!node[char]) return;

        node = node[char];

        if (node.word) {
            result.push(node.word);
            node.word = null; 
        }

        board[r][c] = "#";

        let directions = [[1,0],[-1,0],[0,1],[0,-1]];

        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;

            if (
                nr >= 0 &&
                nc >= 0 &&
                nr < rows &&
                nc < cols &&
                board[nr][nc] !== "#"
            ) {
                dfs(nr, nc, node);
            }
        }

        board[r][c] = char; 
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, root);
        }
    }

    return result;
};