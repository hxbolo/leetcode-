// 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

// 给出两个整数 x 和 y，计算它们之间的汉明距离。

// 注意：
// 0 ≤ x, y < 231.

// 示例:

// 输入: x = 1, y = 4

// 输出: 2

// 解释:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// 上面的箭头指出了对应二进制位不同的位置。

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  // 转成32位数组进行比较
  let arrx =  x.toString(2).padStart(32,0).split('')
  let arry =  y.toString(2).padStart(32,0).split('')
  let sum = 0
  for(let i = 0; i< arrx.length; i++){
    if(arrx[i] !=arry[i] ){
      sum++
    }
  }
  return sum

};
console.log(hammingDistance(1,4));


// 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。

// 完成所有替换操作后，请你返回这个数组。

// 示例：

// 输入：arr = [17,18,5,4,6,1]
// 输出：[18,6,6,6,1,-1]


