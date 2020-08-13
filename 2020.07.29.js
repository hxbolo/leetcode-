// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"

// var reverseLeftWords = function(s, n) {
//   console.log(s,n);
//  let a =  s.slice(n)
//  let b =  s.slice(0,n)
//  console.log(s.slice(n) + s.slice(0,n));
 
//  return s.slice(n) + s.slice(0,n)
 
 

// };
// reverseLeftWords('abcdefg', 2)

// 输入：nums = [8,1,2,2,3]
// 输出：[4,0,1,1,3]
// 解释： 
// 对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。 
// 对于 nums[1]=1 不存在比它小的数字。
// 对于 nums[2]=2 存在一个比它小的数字：（1）。 
// 对于 nums[3]=2 存在一个比它小的数字：（1）。 
// 对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。


/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var smallerNumbersThanCurrent = function(nums) {
//   let res = []
//   for(let i = 0 ; i< nums.length; i++){
//     let num  =0
//     for(let j = 0 ; j< nums.length; j++){
//       if(nums[j]< nums[i]){
//         num++
//       }
      
//     }

//     res.push(num)
//   }
//   return res
  
// };  

// let a = smallerNumbersThanCurrent([8,1,2,2,3])
// console.log(a);



// 给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。
// var findNumbers = function(nums) {
//   // let a = 0
//   // nums.map(i=>{
//   //   if( String(i).length % 2 ===0 ){
//   //     a+=1
//   //   }
   
//   // })
 
//   // return a
//   return nums.filter(i=> i.toString().length %2 == 0).length

  
// };

// let b =findNumbers([12,345,2,6,7896])
// console.log(b);


// var xorOperation = function(n, start) {
//   let ans = 0;
  
//   for(let i = 0; i < n; i++) {
//       let elem = start + 2 * i;
//       console.log('elem',elem);
      
//       ans = ans ^ elem;
//   }
  
//   return ans;
// };

// let c = xorOperation(4 ,3)
// console.log(c);

console.log(3 ^ 5 );


