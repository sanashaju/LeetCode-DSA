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
var countNodes = function(root) {
    if (root === null) {
        return 0;
    }

    function getLeftHeight(node) {
        let height = 0;
        while (node !== null) {
            height++;
            node = node.left;
        }
        return height;
    }

    function getRightHeight(node) {
        let height = 0;
        while (node !== null) {
            height++;
            node = node.right;
        }
        return height;
    }

    let leftHeight = getLeftHeight(root);
    let rightHeight = getRightHeight(root);

    if (leftHeight === rightHeight) {
        return Math.pow(2, leftHeight) - 1;
    }

   return 1 + countNodes(root.left) + countNodes(root.right);
};
