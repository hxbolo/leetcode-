// 斐波那契
var Fibonacci = function (n) {
  if (n == 2 || n == 1) return 1;
  let prev = 1;
  let curr = 1;
  for (let i = 3; i <= n; i++) {
    const sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
};

console.log(Fibonacci(50));
