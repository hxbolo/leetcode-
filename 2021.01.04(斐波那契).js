



// 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给你 n ，请计算 F(n) 。

// 示例 1：

// 输入：2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1


var fib = function(N) {
  // if (N === 1 || N === 2) return 1;
  // return fib(N - 1) + fib(N - 2);
  if(N <= 0 ) return 0
  if(N ===1 || N ===2) return 1
  let pre  = 1 ,cur = 1 , sum = 0
  for(let i = 3; i <= N; i++){
    sum =  pre + cur 
    pre = cur
    cur = sum 
  }
  return cur
};

console.log(fib(7));


// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

var addTwoNumbers = function (l1, l2) {
  // if(l1[0] == 0  || l2[0] ==0){
  //   return 0
  // }
  // let a1 = Number(l1.reverse().join(""));
  // let a2 = Number(l2.reverse().join(""));
  // let sum = a1+ a2
  // return Number( String(sum).split('')).reverse()
};

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];

console.log(addTwoNumbers(l1, l2));

