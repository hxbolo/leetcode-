// 请你编写一个程序来计算两个日期之间隔了多少天。

// 日期以字符串形式给出，格式为 YYYY-MM-DD，如示例所示。

// 输入：date1 = "2019-06-29", date2 = "2019-06-30"
// 输出：1

// 输入：date1 = "2020-01-15", date2 = "2019-12-31"
// 输出：15

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  // 转成毫秒相减
  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();
  return Math.abs(date1 - date2) / 1000 / 60 / 60 / 24;
};
// console.log(daysBetweenDates("1971-06-29", "2010-09-23"));

// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 说明:

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
//
// 示例:

// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
  nums1.push(...nums2);
  return nums1.sort((a, b) => a - b);
};
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。

// 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。

// 输入：A = [1,2,0,0], K = 34
// 输出：[1,2,3,4]
// 解释：1200 + 34 = 1234

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let num = BigInt(A.join("")) + BigInt(K);
  let arr = String(num).split("");

  return arr;
};

// addToArrayForm(
//   [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
//   516
// );

// 给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。

// 更正式地，检查是否存在两个下标 i 和 j 满足：

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
//
// 输入：arr = [10,2,5,3]
// 输出：true
// 解释：N = 10 是 M = 5 的两倍，即 10 = 2 * 5 。
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j] * 2 || arr[j] == arr[i] * 2) {
        flag = true;
        break;
      }
    }
  }

  return flag;
};
// console.log(checkIfExist([3, 1, 7, 11]));

// 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。

// 示例1:

//  输入："aabcccccaaa"
//  输出："a2b1c5a3"
// 示例2:

//  输入："abbccd"
//  输出："abbccd"
//  解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。

/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let count = 1;
  let str = "";
  for (let i = 1; i < S.length + 1; i++) {
    if (S[i - 1] === S[i]) {
      count++;
    } else {
      str += S.slice(i - 1, i) + count;
      count = 1;
    }
  }
  console.log(count);
  return S.length <= str.length ? S : str;
};
console.log(compressString("aabcccccaaa"));
