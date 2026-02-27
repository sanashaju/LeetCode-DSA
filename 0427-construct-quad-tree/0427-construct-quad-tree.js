/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
    
    let n = grid.length;

    function build(row, col, size) {
        let same = true;
        let first = grid[row][col];

        for (let i = row; i < row + size; i++) {
            for (let j = col; j < col + size; j++) {
                if (grid[i][j] !== first) {
                    same = false;
                    break;
                }
            }
            if (!same) break;
        }

        if (same) {
            return new _Node(first === 1, true, null, null, null, null);
        }

        let half = size / 2;

        return new _Node(
            true, 
            false,
            build(row, col, half),                 
            build(row, col + half, half),          
            build(row + half, col, half),          
            build(row + half, col + half, half)    
        );
    }

    return build(0, 0, n);
};