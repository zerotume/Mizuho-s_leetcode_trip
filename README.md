# Mizuho's leetcode trip
Record my trip on my leetcode attempts.

# Easy Problems:

## twoSum:

- Runtime: 83 ms, faster than 76.14% of JavaScript online submissions for Two Sum.
- Memory Usage: 42.9 MB, less than 41.06% of JavaScript online submissions for Two Sum.

---
## isPalindrome:

- Runtime: 302 ms, faster than 25.05% of JavaScript online submissions for Palindrome Number.
- Memory Usage: 51.1 MB, less than 58.92% of JavaScript online submissions for Palindrome Number.

- from other ones solution:
  - num % 10 === 0 -> last digit is 0, return false
  - .split('').reverse().join('') and compare
  - (I'm So Fxxxixx Sxxxxd)

---

## longestCommonPrefix

- Runtime: 77 ms, faster than 64.12% of JavaScript online submissions for Longest Common Prefix.
- Memory Usage: 43.8 MB, less than 25.47% of JavaScript online submissions for Longest Common Prefix.
- submitted 5 times and passed wtf

---

## isValidParentheses

 - Runtime: 100 ms, faster than 26.28% of JavaScript online submissions for Valid Parentheses.
 - Memory Usage: 42.6 MB, less than 25.41% of JavaScript online submissions for Valid Parentheses.
 - ??? 100 ms fater than 26.28%?????
 - how fast are you doing this
 - 64ms faster than 99.77% wtf
 - juan, jiu en juan


 - another attempt:
 - Runtime: 68 ms, faster than 78.36% of JavaScript online submissions for Valid Parentheses.
 - Memory Usage: 41.6 MB, less than 98.83% of JavaScript online submissions for Valid Parentheses.
 - looks like decalring/assinging new variable makes it slower?
 - return arr.length?false:true will make it slower????
 - runtime and memory usage changes everytime I submit?????????

---

## mergeTwoLists
- Runtime: 71 ms, faster than 86.29% of JavaScript online submissions for Merge Two Sorted Lists.
- Memory Usage: 43.9 MB, less than 89.31% of JavaScript online submissions for Merge Two Sorted Lists.
- 1 submit ACE!

---

# Medium Problems:

## pancakeSort

- First attempt:
- Runtime: 144 ms, faster than 9.46% of JavaScript online submissions for Pancake Sorting.
- Memory Usage: 48.6 MB, less than 8.11% of JavaScript online submissions for Pancake Sorting.
- ??????????WOC???????????????????????????????YO&^%&&^E$*^&&^&*%$^
- I'll try some better solutions later orz

---

## numIslands

- Runtime: 209 ms, faster than 11.55% of JavaScript online submissions for Number of Islands.
- Memory Usage: 64.6 MB, less than 5.12% of JavaScript online submissions for Number of Islands.
- This is a logically-clear solution
- We are using our own stack to mock the callstack
- and using a set to mark the visited cells
- If we mark the visited cells in-place, which means mutate the cells after visiting them with values represents "visited"/"don't go to here
- and use recursions for finding neighbours
- it will be much faster.

---
