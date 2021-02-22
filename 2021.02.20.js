
// 给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。

// 我们是这样定义一个非递减数列的： 对于数组中任意的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。

 

// 示例 1:

// 输入: nums = [4,2,3]
// 输出: true
// 解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
// 示例 2:

// 输入: nums = [4,2,1]
// 输出: false
// 解释: 你不能在只改变一个元素的情况下将其变为非递减数列。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var checkPossibility = function(nums) {
//   for(let i =  1; i< nums.length ; i ++ ){
//     console.log(nums[i]);
//     let bef  = nums[i] -1
//     console.log(bef);
//     if(bef > nums[i]){
//       console.log('-=-=-=');
//     }
//   }

// };

// var checkPossibility = function(nums) {
//   const n = nums.length;
//   let cnt = 0;
//   for (let i = 0; i < n - 1; ++i) {
//       const x = nums[i], y = nums[i + 1];
//       console.log(x,y);
//       if (x > y) {
//           cnt++;
//           if (cnt > 1) {
//               return false;
//           }
//           if (i > 0 && y < nums[i - 1]) {
//               nums[i + 1] = x;
//               console.log('  nums[i + 1] = x;', y, nums[i + 1] , x);
//           }
//       }
//   }
//   return true;
// };


var checkPossibility = function(nums) {
  let count=0;
  if(nums[0]>nums[1])count++;
  for(let i=1;i<nums.length-1;i++){
      if(nums[i]>nums[i+1]){          
          if(nums[i-1]<=nums[i+1]){
              nums[i]=nums[i-1];
          }else nums[i+1]=nums[i]; 
          count++;
      }
  }
  if(count>1){return false;}
  return true;

};

console.log(
  
  checkPossibility([4,1,9])
);

