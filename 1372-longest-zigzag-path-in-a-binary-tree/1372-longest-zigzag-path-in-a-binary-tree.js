/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    let maxLen = 0;
    const dfs = (node) => {
        if (!node) return [-1, -1]; 
        const leftPair = dfs(node.left);
        const rightPair = dfs(node.right);

        const left = 1 + leftPair[1];   
        const right = 1 + rightPair[0]; 

        maxLen = Math.max(maxLen, left, right);
        return [left, right];
    };

    dfs(root);
    return maxLen;
};

