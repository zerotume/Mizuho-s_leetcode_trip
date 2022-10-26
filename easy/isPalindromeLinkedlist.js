/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    if(head.next === null)return head.val;
    let fast = head;
    let slow = head;
    while(fast != null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }
    if(fast != null){
        slow = slow.next;
    }

    let prev = slow;
    slow = slow.next;
    prev.next = null;
    while(slow){
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    let again = head;
    slow = prev;

    while(slow){
        if(slow.val !== again.val)return false;
        slow = slow.next;
        again = again.next;
    }

    return true;
};

// Runtime: 231 ms, faster than 62.57% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 69.5 MB, less than 83.42% of JavaScript online submissions for Palindrome Linked List.
// the biggest chanllenge is about how javascript is referencing the memory block
// so the order of assigning value is important
// which means that, when we use it like prev = slow, the prev is actually pointing to the memory block
// which slow is pointed to.
// in C/C++ maybe it's LinkedListNode *prev = slow?
