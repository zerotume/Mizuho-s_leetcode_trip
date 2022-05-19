/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let p1 = list1;
    let p2 = list2;
    let p = new ListNode();
    let head = p;
    while(p1 && p2){
        if(p1.val < p2.val){
            p.next = new ListNode(p1.val);
            p1 = p1.next;
        }else{
            p.next = new ListNode(p2.val);
            p2 = p2.next;
        }
        p = p.next;
    }

    while(p1){
        p.next = new ListNode(p1.val);
        p1 = p1.next;
        p = p.next;
    }

    while(p2){
        p.next = new ListNode(p2.val);
        p2 = p2.next;
        p = p.next;
    }

    return head.next;
};


// Runtime: 71 ms, faster than 86.29% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 43.9 MB, less than 89.31% of JavaScript online submissions for Merge Two Sorted Lists.
// 1 submit ACE!
