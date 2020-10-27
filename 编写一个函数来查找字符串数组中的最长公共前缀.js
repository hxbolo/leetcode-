// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"

// var longestCommonPrefix = function (strs) {
//   let res = "";
//   let str = strs[0];

//   if (!str) return "";
//   for (let i = 0; i < str.length; i++) {
//     let flg = strs.every(item => item[i] == str[i])
//     console.log("flg",flg);

//     if (flg) {
//       res += str[i];
      
//     } else {
//       return res;
//     }
//   }
//   return res
// };

var longestCommonPrefix = function(strs) {
  const min = strs.reduce((p,c)=>p.length<c.length?p:c,strs[0])
  console.log(min);
  
  let len = min.length
  let maxCommon = min[0]
  let res = ''
  for (let i = 1; i < len+1; i++) {
    const every = strs.every(s=>s.startsWith(maxCommon))
    if(every){
      console.log('maxCommon',maxCommon)
      res = maxCommon
      maxCommon += min[i]
      continue
    }else{
      return res
    }
  }
  return res
};
let a = longestCommonPrefix(["a"]);
console.log(a);
