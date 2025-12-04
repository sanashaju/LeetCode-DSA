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
var goodNodes = function(root) {
    const dfs = (node, maxSoFar) => {
        if (!node) return 0;

        let count = 0;
        if (node.val >= maxSoFar) {
            count = 1;
            maxSoFar = node.val;
        }

        return count + dfs(node.left, maxSoFar) + dfs(node.right, maxSoFar);
    };

    return dfs(root, root.val);
};
