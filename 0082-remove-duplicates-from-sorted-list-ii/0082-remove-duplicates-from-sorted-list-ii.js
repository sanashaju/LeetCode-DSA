/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy; 
    let curr = head;

    while (curr !== null) {
        if (curr.next !== null && curr.val === curr.next.val) {
            let duplicateVal = curr.val;

            while (curr !== null && curr.val === duplicateVal) {
                curr = curr.next;
            }

            prev.next = curr; 
        } else {
            prev = curr;
            curr = curr.next;
        }
    }

    return dummy.next;
};
