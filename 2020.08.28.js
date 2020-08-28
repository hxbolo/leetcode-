// 给你两个长度相同的整数数组 target 和 arr 。

// 每一步中，你可以选择 arr 的任意 非空子数组 并将它翻转。你可以执行此过程任意次。

// 如果你能让 arr 变得与 target 相同，返回 True；否则，返回 False 。
// target = [1,2,3,4], arr = [2,4,1,3]

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  target.sort();
  arr.sort();
  console.log(JSON.stringify(target) == JSON.stringify(arr));

  // if(target.toString() === arr.toString())return true
  // return false

  return JSON.stringify(target) == JSON.stringify(arr);
};
// console.log(canBeEqual([1,2,3,4], [2,4,1,3]));

// 给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 。

// 示例 1：

// 输入：n = 5
// 输出：[-7,-1,1,3,4]
// 解释：这些数组也是正确的 [-5,-1,1,2,3]，[-3,-1,2,-2,4]。

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let arr = [];
  for (let i = 1; i <= n / 2; i++) {

    arr.push(i, -i);
  }
  if (n % 2 !== 0) arr.push(0);
  console.log(arr);
  return arr;
};
sumZero(5);
