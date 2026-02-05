/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let lessDummy = new ListNode(0);
    let greaterDummy = new ListNode(0);

    let less = lessDummy;
    let greater = greaterDummy;

    let current = head;

    while (current) {
        if (current.val < x) {
            less.next = current;
            less = less.next;
        } else {
            greater.next = current;
            greater = greater.next;
        }
        current = current.next;
    }

    greater.next = null;

    less.next = greaterDummy.next;

    return lessDummy.next;
};
