# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head.next is None:
            return head;
        counter = head;
        middler = head;
        length = 1;
        while counter.next:
            counter = counter.next
            length += 1;
        half = int(length / 2)+1;
        while half > 1:
            middler = middler.next;
            half -= 1;
        return middler;
        

# Runtime: 29 ms, faster than 96.92% of Python3 online submissions for Middle of the Linked List.
# Memory Usage: 13.9 MB, less than 11.52% of Python3 online submissions for Middle of the Linked List.
# That's so good!