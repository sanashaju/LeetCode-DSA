/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let preorderIndex = 0;

    function helper(left, right) {
        if (left > right) {
            return null;
        }

        let rootValue = preorder[preorderIndex++];
        let root = new TreeNode(rootValue);

        let inorderIndex = inorderMap.get(rootValue);

        root.left = helper(left, inorderIndex - 1);

        root.right = helper(inorderIndex + 1, right);

        return root;
    }

    return helper(0, inorder.length - 1);
};
