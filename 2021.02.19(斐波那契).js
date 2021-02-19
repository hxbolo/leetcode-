// 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.

// 输入：n = 2
// 输出：1
// 示例 2：

// 输入：n = 5
// 输出：5

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 0) return 0;
  if (n == 1 || n == 2) return 1;
  let pre = 1,
    cur = 1,
    sum = 0;
  for (let i = 3; i <= n; i++) {
    sum = (pre + cur) % 1000000007;
    pre = cur;
    cur = sum;
  }
  return cur;
};
// console.log(fib(5));

// 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。

// 交换字母的定义是取两个下标 i 和 j （下标从 0 开始），只要 i!=j 就交换 A[i] 和 A[j] 处的字符。例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。

//

// 示例 1：

// 输入： A = "ab", B = "ba"
// 输出： true
// 解释： 你可以交换 A[0] = 'a' 和 A[1] = 'b' 生成 "ba"，此时 A 和 B 相等。

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if(A.length != B.length || A == ''|| B == '' ) return false
  let cunt = 0
  let arr = []
  let obj = {}
  if(A.length == B.length){
    for(let i  = 0; i< A.length; i++){
      if(A[i] != B[i]){
        cunt++
        obj[i] = A[i]
      }
      if(cunt > 2)return false
    }
    if(cunt <= 2) {
      console.log( obj);
      for(let key in obj){
        arr.push(obj[key] ,B[key])
      }
      console.log('arr',arr);
      return (arr[0] == arr[3] && arr[1]=== arr[2]) ? true: false
    }
  }

};

console.log(buddyStrings("ab", "ab"));
