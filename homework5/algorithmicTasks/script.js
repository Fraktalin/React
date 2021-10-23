// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

let isPalindrome = function (x) {
  return x === Number(x.toString().split("").reverse().join(""));
};

// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

var strStr = function (haystack, needle) {
  if (!needle) return 0;
  for (let j = 0, i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) j++;
    else (i -= j), (j = 0);
    if (j === needle.length) return i - j + 1;
  }
  return -1;
};
