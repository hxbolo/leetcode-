// 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。

// 示例1:

//  输入：s1 = "waterbottle", s2 = "erbottlewat"
//  输出：True

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 思路 类似 轮播图， 在后面多放一张图， 然后查找
var isFlipedString = function (s1, s2) {
  if (s1.length !== s2.length) return false;
  return s1.repeat(2).includes(s2) ? true : false;
};
// console.log(isFlipedString("waterbottle", "erbsttlewat"));

// 给定一个整数数组，判断是否存在重复元素。

// 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

// 示例 1:

// 输入: [1,2,3,1]
// 输出: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // 去重判断长度
  //  return Array.from(new Set(nums)).length !== nums.length

  //  大小排序 在两两比较
  nums.sort();
  let flag = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      flag = true;
      break;
    }
  }
  return flag;
};
// console.log(containsDuplicate([33, 4, 3, 1]));

// 给你一个按 YYYY-MM-DD 格式表示日期的字符串 date，请你计算并返回该日期是当年的第几天。

// 通常情况下，我们认为 1 月 1 日是每年的第 1 天，1 月 2 日是每年的第 2 天，依此类推。每个月的天数与现行公元纪年法（格里高利历）一致。
// 示例 1：

// 输入：date = "2019-01-09"
// 输出：9

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  let arr = date.split("-");
  //  是不是闰年 2月29年
  let year = arr[0];
  let month = Number(arr[1]);
  let day = Number(arr[2]);

  let days = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    days[1] = 29;
  }
  let num = 0;
  for (let i = 1; i <= month - 1; i++) {
    if (month === 1) return;
    num += days[i - 1];
  }
  num += day;

  return num;
};

// console.log(dayOfYear("2019-02-10"));

// 给定两个字符串, A 和 B。

// A 的旋转操作就是将 A 最左边的字符移动到最右边。 例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea' 。如果在若干次旋转操作之后，A 能变成B，那么返回True。

// 示例 1:
// 输入: A = 'abcde', B = 'cdeab'
// 输出: true

// 示例 2:
// 输入: A = 'abcde', B = 'abced'
// 输出: false

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if(A.length !== B.length) return false
  return A.repeat(2).includes(B);
};
console.log(rotateString('abcde', 'cdeab'));
