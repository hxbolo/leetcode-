// // // // // let a = [1,3,4]
// // // // // let b = [2,5,6]
// // // // // let c = [2,5,6]
// // // // // // console.log(b.concat(a,c));


// // // // // let d  = [1,3,4,5,6,[3,[3,2,2],23,4]]
// // // // // console.log(d.flat(Infinity));
// // // // // let f = [1,3,4,[5,6,7]]

// // // // // console.log(

// // // // //   f.reduce((acc,val)=> acc.concat(val), [])
// // // // // );

// // // // // let a = [{x:1},{x:2},{x:3}]

// // // // // let b = 0
// // // // // let sum = a.reduce((acc,cur)=>{
// // // // //  return acc + cur.x
// // // // // },b)
// // // // // console.log(sum);


// // // // // var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// // // // // var countedNames = names.reduce( (allNames, name) => { 
// // // // //   console.log('allNames, name',allNames, name);
  
// // // // //   if (name in allNames) {
// // // // //     allNames[name]++;
// // // // //   }
// // // // //   else {
// // // // //     allNames[name] = 1;
// // // // //   }
// // // // //   return allNames;
// // // // // }, {});
// // // // // console.log('countedNames',countedNames);


// // // // var people = [
// // // //   { name: 'Alice', age: 21 },
// // // //   { name: 'Max', age: 20 },
// // // //   { name: 'Jane', age: 20 }
// // // // ];

// // // // function groupBy(objectArray, property) {
// // // //   return objectArray.reduce( (acc, obj) => {
    
// // // //     var key = obj[property];
// // // //     console.log(key);
    
// // // //     if (!acc[key]) {
// // // //       acc[key] = [];
// // // //     }
// // // //     acc[key].push(obj);
// // // //     return acc;
// // // //   }, {});
// // // // }

// // // // let b = groupBy(people , 'age')
// // // // console.log(b);


// // // let arr = [
// // //   {
// // //     id: 1,
// // //     type: 'A',
// // //     total: 3
// // //   }, 
// // //   {
// // //     id: 2,
// // //     type: 'B',
// // //     total: 5
// // //   },
// // //    {
// // //     id: 3,
// // //     type: 'E',
// // //     total: 7
// // //   }
// // // ]

// // // // 统计 total 的总和

// // // let nums = arr.reduce((sum,{total})=>{
// // //   return sum + total
// // // },0)
// // // console.log(nums);

// // // // 将数组的每项转换为固定格式的字符串（如第一项转换为 id:1,type:A;）

// // // let str = arr.reduce((newStr,{id,type}) =>{
// // //   return  newStr+ `id:${id},type:${type};`
// // // },'')
// // // console.log(str);

// // // // 转换成 key value 的对象形式
// // // let res = arr.reduce((obj,{id,type,total})=>{
// // //    obj[id] = {type,total }
// // //    return obj
// // // },{})
// // // console.log(res);



// // // 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。

// // // 完成所有替换操作后，请你返回这个数组。


// // // 示例：

// // // 输入：arr = [17,18,5,4,6,1]
// // // 输出：[18,6,6,6,1,-1]


// // // var replaceElements = function(arr) {
// // //   let max = -1, res = [];

// // //   for (let i = arr.length - 1; i >= 0; i--) {
// // //       res[i] = max;
// // //       console.log(i , res[i] = max);
      
// // //       max = arr[i] > max ? arr[i] : max;
// // //   }
// // //   return res;
// // // };

// // // let a = replaceElements([17,18,5,4,6,1])
// // // console.log(a);


// // // 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。

// // // /**
// // //  * @param {string} str
// // //  * @return {string}
// // //  */
// // // var toLowerCase = function(str) {
// // //   return str.replace(/[A-Z]/g, (item) =>
// // //     String.fromCharCode(item.charCodeAt() + 32)
// // //   );
// // // };

// // // let a = toLowerCase('ABCDEF')
// // // console.log(a);


// // var maximum69Number  = function(num) {
// //   let a = num.split('')


// //    let index =  a.indexOf('6')
  
// //   if(index != -1){
// //     a[index] = 9
// //   }
// //   console.log(a);
// //   num = a.join('')
// //   return num

  
    
// // };

// // let b =maximum69Number('9999')
// // console.log(b);


// // 编写一个方法，找出两个数字a和b中最大的那一个。不得使用if-else或其他比较运算符。

// /**
//  * @param {number} a
//  * @param {number} b
//  * @return {number}
//  */
// var maximum = function(a, b) {
  
// return Math.max(a,b)
// };

// let a = maximum(4,2)
// console.log(a);



/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let a = []
 for(let i = (s.length) -1; i>= 0 ;i--){
  a.push(s[i])
 }
 return a

};

let a = reverseString(["h","e","l","l","o"])
console.log(a);










