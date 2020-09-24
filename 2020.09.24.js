// 给你一个整数数组 salary ，数组里每个数都是 唯一 的，其中 salary[i] 是第 i 个员工的工资。

// 请你返回去掉最低工资和最高工资以后，剩下员工工资的平均值。

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a,b)=>a-b);
  console.log("salary", salary);
  salary.shift();
  salary.pop();
  console.log("salary", salary);
  // let sum = 0;
  // for (let i = 0; i < salary.length; i++) {
  //   sum += salary[i];
  // }
  // return (avg = sum / salary.length);

  let a =  salary.reduce((a, b)=> a+b)/salary.length
  console.log(a);
  

  
};

console.log(average([25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000]));


