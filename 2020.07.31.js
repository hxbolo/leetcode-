// // // 给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。

// // // 请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。

// // //  

// // // 示例 1：

// // // 输入：nums = [2,5,1,3,4,7], n = 3
// // // 输出：[2,3,5,4,1,7] 
// // // 解释：由于 x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 ，所以答案为 [2,3,5,4,1,7]
// // /**
// //  * @param {number[]} nums
// //  * @param {number} n
// //  * @return {number[]}
// //  */
// // var shuffle = function(nums, n) {
// //  let newarr = []
// //  let arr = nums.splice(n)
// //  console.log(arr,nums);
 
// //  for(let i= 0 ; i< nums.length ; i++){

// //    newarr.push(nums[i])
   
// //    newarr.push(arr[i])
// //    console.log('newarr,newarr',newarr);
   
// //  }
// //  console.log(newarr);
 
// //  return newarr

// // };

// // let a = shuffle([1,1,2,2] , 2)
// // // console.log(a);



// // 小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。他们一共进行三次这个游戏，请返回 小A 猜对了几次？

// // 输入的guess数组为 小A 每次的猜测，answer数组为 小B 每次的选择。guess和answer的长度都等于3。


// // 输入：guess = [1,2,3], answer = [1,2,3]
// // 输出：3
// // 解释：小A 每次都猜对了。


// // var game = function(guess, answer) {
// //   // let num = 0
// //   // for(let i = 0 ;  i< guess.length; i++){
// //   //     if(guess[i]===answer[i]){
// //   //       num++
      
// //   //   }
// //   // }
// //   // return num
  
  
// //   console.log( guess.filter((item,index)=>{
// //     return item===answer[index]
// //   }));
  
// //   return guess.filter((item,index)=>{
// //     return item===answer[index]
// //   }).length

// // };

// // let a = game([2,2,3], [3,2,1])
// // console.log(a);

// //  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

// // J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

// // 示例 1:

// // 输入: J = "aA", S = "aAAbbbb"
// // 输出: 3


// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// var numJewelsInStones = function(J, S) {
//   let jarr = J.split('')
//   let sarr = S.split('')
//   let count = 0
// //  for(let i=0 ; i<= J.split('').length; i++){
// //    for(let k = 0; k< S.split('').length; k++){
// //      if( s[i]===j[k]){
// //       count++
// //      }
// //    }
// //  }
// //  return count

//  return sarr.filter((item)=>
//   jarr.includes(item)
//   ).length
  
// };

// let a = numJewelsInStones('aA', 'aAAbbbb')
// console.log(a);


// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

// 示例 1：

// 输入: s = "leetcode"
// 输出: false 


var isUnique = function(astr) {
  // console.log( new Set(astr).size === astr.length );
  const astr2 = astr.split('')
    let flag = true
    for(let i = 0; i < astr2.length; i++){
        for(let j = i+1; j < astr2.length; j++ ){
            if(astr2[i]==astr2[j]){
                return flag = false  
            }else{
                flag = true
            }
        }   
       
    }
    return flag
};

let a = isUnique('abc')
console.log(a);


