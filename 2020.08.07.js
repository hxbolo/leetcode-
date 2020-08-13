// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。


// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  for(let i = 0; i< nums.length; i++){
    let a = target-nums[i]
    if(nums.includes(a) && nums.indexOf(a)!== i){
      return [i,nums.indexOf(a)]
    } 
    
  }
    
 
};
twoSum([2, 7, 11, 15],9)
// console.log(twoSum([2, 7, 11, 15],9));


// 给你一个整数 n，请你返回一个含 n 个字符的字符串，其中每种字符在该字符串中都恰好出现 奇数次 。

// 返回的字符串必须只含小写英文字母。如果存在多个满足题目要求的字符串，则返回其中任意一个即可。

// 输入：n = 4
// 输出："pppz"
// 解释："pppz" 是一个满足题目要求的字符串，因为 'p' 出现 3 次，且 'z' 出现 1 次。当然，还有很多其他字符串也满足题目要求，比如："ohhh" 和 "love"。


/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  // if (n % 2 !== 0) return new Array(n).fill('a').join('');
  // return new Array(n-1).fill('a').join('')+'b';

  return 'a'.repeat(n-1)+ (n%2 ===0 ? 'b':'a')
};
let a = generateTheString(3)
// console.log(a);

// 自除数 是指可以被它包含的每一位数除尽的数。

// 例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。

// 还有，自除数不允许包含 0 。

// 给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。

// 示例 1：

// 输入： 
// 上边界left = 1, 下边界right = 22
// 输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
// -------------------------------------------------------

// 你和你的朋友，两个人一起玩 Nim 游戏：桌子上有一堆石头，每次你们轮流拿掉 1 - 3 块石头。 拿掉最后一块石头的人就是获胜者。你作为先手。

// 你们是聪明人，每一步都是最优解。 编写一个函数，来判断你是否可以在给定石头数量的情况下赢得游戏。

// 示例:

// 输入: 4
// 输出: false 
// 解释: 如果堆中有 4 块石头，那么你永远不会赢得比赛；
//      因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return n % 4 !== 0 
};

let b = canWinNim(1)
// console.log(b);

// 数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？

// 注意：本题相对书上原题稍作改动

// 示例 1：

// 输入：[3,0,1]
// 输出：2

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
//   console.log( nums.length);
  
//   let newNums = nums.sort((a,b)=>a-b)
//   console.log(newNums);
//   for(let i= 0; i<newNums.length; i++){

//     if(newNums[i] !== i){
//       return i
//     }else if(newNums[i] == 0 && newNums.length ===1){
//       return i+1
//     }else if(newNums[i] == newNums.length ==1 && ){
// newNums[i] !== i
//     }
//   }
nums.sort((a, b) => a - b);
for (let i = 0; i <= nums.length; i++) {
  if (nums[i] !== i) {
    return i;
  }
}


};

let c = missingNumber([0,1])
console.log(c);




