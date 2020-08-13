// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
//
// 示例 1：

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  return arr.sort((a, b) => a - b).splice(k);
};

getLeastNumbers([3, 2, 1], 2);

// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

// 示例 1:

// 给定 nums = [3,2,2,3], val = 3,

// 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

// 你不需要考虑数组中超出新长度后面的元素。

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      index++;
    }
  }
  return index;

  //   for(var i =0;i<nums.length;i++){
  //     if(nums[i]==val){
  //         nums.splice(i,1)
  //         i--
  //     }
  // }
  // return nums
};
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。

// 回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。

// 回文串不一定是字典当中的单词。

// 示例1：

// 输入："tactcoa"
// 输出：true（排列有"tacocat"、"atcocta"，等等）

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      delete obj[s[i]];
    } else {
      obj[s[i]] = s[i];
    }
    console.log(obj);
  }

  return Object.keys(obj).length <= 1;
};

// console.log(canPermutePalindrome("rererere"));

// 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

// 初始化 A 和 B 的元素数量分别为 m 和 n。

// 示例:

// 输入:
// A = [1,2,3,0,0,0], m = 3
// B = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  A.splice(m);
  
  B = B.splice(0, n);
  
  for (let i = 0; i < B.length; i++) {
    A.push(B[i]);
  }
  return A.sort((a, b) => a - b);
};


merge([1,2,3,0,0,0], 3, [2,5,6], 3);
