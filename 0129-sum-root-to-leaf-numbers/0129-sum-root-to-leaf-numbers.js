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
var sumNumbers = function(root) {
    let totalSum = 0;

    function dfs(node, currentNumber) {
        if (node === null) {
            return;
        }

        currentNumber = currentNumber * 10 + node.val;

        if (node.left === null && node.right === null) {
            totalSum += currentNumber;
            return;
        }

        dfs(node.left, currentNumber);
        dfs(node.right, currentNumber);
    }

    dfs(root, 0);

    return totalSum;
};
