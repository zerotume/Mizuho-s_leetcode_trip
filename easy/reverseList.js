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
 var reverseList = function(head) {
    if(!head) return head;
    const stack = [head];
    let curr = head;
    while(curr.next){
        stack.push(curr.next)
        curr = curr.next
    }
    let top = stack.pop();
    let prev = top;
    let newHead = top;
    while(stack.length){
        top = stack.pop();
        prev.next = top;
        prev = top;
    }
    prev.next = null;
    return newHead;
};

// Runtime: 117 ms, faster than 23.28% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 43.9 MB, less than 79.11% of JavaScript online submissions for Reverse Linked List.
// ummmm maybe recursion one is better?
