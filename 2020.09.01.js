// 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。

// 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
// 输入：arr = [1,2,2,1,1,3]
// 输出：true
// 解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let v = arr[i]
    if( obj[v]){
      obj[v]++
    }else{
      obj[v] = 1
    }
  }
  console.log(obj);
    let newArr = []
  for(let key in obj){
    newArr.push(obj[key])
  }

  console.log(newArr, Array.from(new Set(newArr)));
  return Array.from(new Set(newArr)).length == newArr.length ? true : false
  
};
console.log(uniqueOccurrences([1,2,2,1,1,3]));

