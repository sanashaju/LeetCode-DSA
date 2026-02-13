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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (root === null) {
        return [];
    }

    let result = [];
    let queue = [root];
    let leftToRight = true;

    while (queue.length > 0) {
        let levelSize = queue.length;
        let level = new Array(levelSize);

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();

            let index = leftToRight ? i : levelSize - 1 - i;
            level[index] = node.val;

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        result.push(level);
        leftToRight = !leftToRight; 
    }

    return result;
};
