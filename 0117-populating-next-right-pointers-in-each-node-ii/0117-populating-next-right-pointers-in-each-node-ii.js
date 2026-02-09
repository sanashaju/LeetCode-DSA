/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (root === null) {
        return null;
    }

    let current = root;

    while (current !== null) {
        let dummy = new _Node(0);
        let tail = dummy;

        while (current !== null) {
            if (current.left !== null) {
                tail.next = current.left;
                tail = tail.next;
            }

            if (current.right !== null) {
                tail.next = current.right;
                tail = tail.next;
            }

            current = current.next;
        }

        current = dummy.next;
    }

    return root;
};
