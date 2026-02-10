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
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function dfs(node) {
        if (node === null) {
            return 0;
        }

        let left = Math.max(0, dfs(node.left));
        let right = Math.max(0, dfs(node.right));

        let currentPathSum = node.val + left + right;

        maxSum = Math.max(maxSum, currentPathSum);

        return node.val + Math.max(left, right);
    }

    dfs(root);

    return maxSum;
};
