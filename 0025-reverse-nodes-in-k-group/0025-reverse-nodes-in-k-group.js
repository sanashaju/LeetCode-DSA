/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;

    while (true) {
        let kth = groupPrev;
        for (let i = 0; i < k && kth !== null; i++) {
            kth = kth.next;
        }
        if (kth === null) break;

        let groupNext = kth.next;

        let prev = groupNext;
        let curr = groupPrev.next;

        while (curr !== groupNext) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        let temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;
    }

    return dummy.next;
};
