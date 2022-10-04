/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(!head)return false;
    let fast = head;
    let slow = head.next;
    while(slow && slow.next && slow.next.next){
        if(fast === slow) return true;
        fast = fast.next;
        slow = slow.next.next;
    }
    return false;
};

// Runtime: 122 ms, faster than 41.06% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 44.8 MB, less than 67.50% of JavaScript online submissions for Linked List Cycle.
// key point: compare the nodes, not the values .......
