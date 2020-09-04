// 给你一个整数数组 arr，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 true ；否则，返回 false 。
// 输入：arr = [1,2,34,3,4,5,7,23,12]
// 输出：true
// 解释：存在连续三个元素都是奇数的情况，即 [5,7,23] 。

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] % 2 != 0 && arr[i - 1] % 2 != 0 && arr[i - 2] % 2 != 0)
      return true;
  }

  return false;
};

// console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));

// 在整数数组中，如果一个整数的出现频次和它的数值大小相等，我们就称这个整数为「幸运数」。

// 给你一个整数数组 arr，请你从中找出并返回一个幸运数。

// 如果数组中存在多个幸运数，只需返回 最大 的那个。
// 如果数组中不含幸运数，则返回 -1 。
//

// 输入：arr = [2,2,3,4]
// 输出：2
// 解释：数组中唯一的幸运数是 2 ，因为数值 2 的出现频次也是 2

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let v = arr[i];
    if (obj[v]) {
      obj[v]++;
    } else {
      obj[v] = 1;
    }
  }
  let newArr = [];
  for (let k in obj) {
    if (k == obj[k]) {
      newArr.push(k);
    }else{
      newArr.push(-1);
    }
  }
  return Math.max(...newArr);
};

console.log(findLucky([2, 22, 3, 4]));
