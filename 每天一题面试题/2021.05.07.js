// 为什么 0.1 + 0.2 !== 0.3，请描述原因并手写解决该问题的函数。

// 因为 Js计算会转换成二进制计算， 精度会丢失

// 解决方案 
// console.log(  ((0.1 * 100) + (0.2 *100) )/100 );

function add (a, b ){
  return parseFloat((a+b)).toFixed(2)
}

console.log(add(0.1, 0.2));