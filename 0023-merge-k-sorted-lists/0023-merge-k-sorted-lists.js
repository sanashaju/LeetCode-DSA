/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    if (!lists || lists.length === 0) return null;

    function mergeTwo(l1, l2) {
        let dummy = new ListNode(0);
        let tail = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        tail.next = l1 || l2;

        return dummy.next;
    }

    function mergeRange(left, right) {
        if (left === right) return lists[left];

        let mid = Math.floor((left + right) / 2);

        let l1 = mergeRange(left, mid);
        let l2 = mergeRange(mid + 1, right);

        return mergeTwo(l1, l2);
    }

    return mergeRange(0, lists.length - 1);
};