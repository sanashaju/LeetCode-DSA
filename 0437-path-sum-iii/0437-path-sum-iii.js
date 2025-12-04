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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const map = new Map();
    map.set(0, 1);

    const dfs = (node, sum) => {
        if (!node) return 0;

        sum += node.val;
        let count = map.get(sum - targetSum) || 0;

        map.set(sum, (map.get(sum) || 0) + 1);

        count += dfs(node.left, sum);
        count += dfs(node.right, sum);

        map.set(sum, map.get(sum) - 1);

        return count;
    };

    return dfs(root, 0);
};
