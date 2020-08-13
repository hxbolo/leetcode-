// let str = 33839803983938
// /*
// * 回文
// * @param {string} val 需要反转的字符串
// */
// function isPalindrome1(str){
//   if(typeof str !==  String){
//     str = str.toString()
//   }
//   str = str.split('').reverse().join('')
//   console.log(str);
  
// }
// // isPalindrome1(str)

// /*
// * 阶乘
// * @param {number} n 需要求的阶乘
// * @return {number} 阶乘值
// */
// // 递归法
// function factorialize1(n){
//   if(typeof n !=='number' ) throw new Error('参数必须为整整')
//   if(n === 1 )return 1
//   return  n* factorialize1(n-1)
// }

// function factorialize2(n, total = 1){
//   if(typeof n !== 'number' || typeof total !== 'number')throw new Error('参数必须为整整')
//   if(n = 1) return 1
//   return factorialize2(n-1 , n* total)
// }


// /*
// * 生成指定长度的随机字符串
// * @param {number} n 生成字符串个数
// * @return {string} str 反转后的字符串
// */
// function randomString1(n){
// 	let str = 'abcdefghijklmnopqrstuvwxyz0123456789';
// 	let tem = '',
//     i = 0;
//     console.log(Math.random() * str.length);
// 	// Math.random 函数产生值的范围[0,1)
// 	while(i<n){
// 		tem += str.charAt(Math.floor(Math.random() * str.length))
// 		i++;
// 	}
// 	return tem;
// }

// // 去重
// function unique1(arr){
//   return Array.from([...new Set(arr)])
// }


// // 数组扁平化
// let ary = [2,3,2,1,6,[8,6,],2,60,[4,24,[3,2,3]],5]
// function flatten(ary){
//   return ary.reduce((pre, cur) => {
// 		return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
// 	}, [])
// }
// console.log(flatten(ary));




function makeFunc() {
  var name = "Mozilla";
  function displayName() {
     console.log(name);
     
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();