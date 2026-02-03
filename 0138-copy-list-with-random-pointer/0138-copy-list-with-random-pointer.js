/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (head === null) return null;

    const map = new Map();
    let curr = head;

    while (curr !== null) {
        map.set(curr, new _Node(curr.val, null, null));
        curr = curr.next;
    }

    curr = head;

    while (curr !== null) {
        const copy = map.get(curr);
        copy.next = curr.next ? map.get(curr.next) : null;
        copy.random = curr.random ? map.get(curr.random) : null;
        curr = curr.next;
    }

    return map.get(head);
};
