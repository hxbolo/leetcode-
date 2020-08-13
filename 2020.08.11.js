// 给定一个单词，你需要判断单词的大写使用是否正确。

// 我们定义，在以下情况时，单词的大写用法是正确的：

// 全部字母都是大写，比如"USA"。
// 单词中所有字母都不是大写，比如"leetcode"。
// 如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
// 否则，我们定义这个单词没有正确使用大写字母。

// 示例 1:

// 输入: "USA"
// 输出: True

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  return /^([a-z]+)$|^([A-Z]+)$|^([A-Z][a-z]*)$/.test(word);
};
// console.log(detectCapitalUse("saAe"));

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  if (a == 0) return b;
  if (b == 0) return a;

  return getSum(a ^ b, (a & b) << 1);
};
console.log(getSum(-1, 3));

// getSum(1, 3);

// 给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。

// 输入："ab-cd"
// 输出："dc-ba"

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let arr = S.split('')
  console.log(arr);
  
  
};
reverseOnlyLetters('abcd-fgh')

