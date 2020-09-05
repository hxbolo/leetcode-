// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

// 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
// 输出: 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];

    if (obj[key]) {
      obj[key]++;
    } else {
      obj[key] = 1;
    }
  }
  console.log(obj);
  for (let key in obj) {
    if(obj[key] >= nums.length / 2){
      return key
    }
  }
};
console.log(majorityElement([3,2,3]));
