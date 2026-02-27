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
var sortList = function(head) {
    
    if (!head || !head.next) return head;

    // Step 1: Get length of list
    let length = 0;
    let node = head;
    while (node) {
        length++;
        node = node.next;
    }

    let dummy = new ListNode(0);
    dummy.next = head;

    // Step 2: Bottom-up merge
    for (let size = 1; size < length; size *= 2) {
        let curr = dummy.next;
        let tail = dummy;

        while (curr) {
            let left = curr;
            let right = split(left, size);
            curr = split(right, size);

            tail.next = merge(left, right);

            while (tail.next) {
                tail = tail.next;
            }
        }
    }

    return dummy.next;
};

function split(head, size) {
    if (!head) return null;

    for (let i = 1; head.next && i < size; i++) {
        head = head.next;
    }

    let second = head.next;
    head.next = null;
    return second;
}

function merge(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    curr.next = l1 || l2;

    return dummy.next;
}