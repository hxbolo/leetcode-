// 给你一个整数数组 arr ，请你删除最小 5% 的数字和最大 5% 的数字后，剩余数字的平均值。

// 与 标准答案 误差在 10-5 的结果都被视为正确结果。


// 输入：arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
// 输出：2.00000
// 解释：删除数组中最大和最小的元素后，所有元素都等于 2，所以平均值为 2 

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  arr.sort((a,b) => a-b)
  const n = arr.length, m = n / 20

  let res = 0
  for (let i = m; i < m * 19; i++){ 
    res += arr[i]
  }

  return res / (n - 2 * m)
};
console.log(

  trimMean([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0])
);

