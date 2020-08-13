let arr = [
  {
    id: 1,
    name: "1",
    pid: 0,
  },
  {
    id: 2,
    name: "1-1",
    pid: 1,
  },
  {
    id: 3,
    name: "1-1-1",
    pid: 2,
  },
  {
    id: 4,
    name: "1-2",
    pid: 1,
  },
  {
    id: 5,
    name: "1-2-2",
    pid: 4,
  },
  {
    id: 6,
    name: "1-1-1-1",
    pid: 3,
  },
  {
    id: 7,
    name: "2",
  },
];

function toTree(data, parentId = 0) {
  var itemArr = [];
  for (var i = 0; i < data.length; i++) {
    var node = data[i];
    if (node.pid === parentId) {
      var newNode = {
        ...node,
        name: node.name,
        id: node.id,
        children: toTree(data, node.id),
      };
      itemArr.push(newNode);
    }
  }
  return itemArr;
}

// console.log(toTree(arr))

// 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。
// 输入：[3,1,2,4]
// 输出：[2,4,3,1]
// 输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  // return  A.reduce((res, cur)=>{

  //     if(cur % 2 == 0){
  //       res.unshift(cur)
  //     }else{
  //       res.push(cur)
  //     }

  //     return res
  //   },[])

  return A.sort((a, b) => (a % 2) - (b % 2));
};
sortArrayByParity([3, 1, 2, 4]);
// console.log(sortArrayByParity([3,1,2,4]))

// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 输入: [2,2,1]
// 输出: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //  return nums.reduce((res,cur)=>  res ^ cur)
  let a = nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums.lastIndexOf(nums[i]) === nums.indexOf(nums[i])) {
      return nums[i];
    }
  }
};

// console.log(singleNumber([4,3,3,1,4]));

singleNumber([2, 2, 1]);

// 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）。

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // let arr = n.toString(2).split('')
  // return arr.filter(item=>
  //   item === "1"
  // ).length

  return n.toString(2).split("1").length - 1;
};

// console.log(hammingWeight(00000000000000000000000000001011));

// hammingWeight(00000000000000000000000000001011)

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
  arr.map((item) => {
    return (obj[item] = obj[item] ? ++obj[item] : 1);
  });

  let newArr = new Array(1000);

  for (key in obj) {
    if (newArr[obj[key]] == obj[key]) {
      return false;
    } else {
      newArr[obj[key]] = obj[key];
    }
  }
};
// uniqueOccurrences([1, 2, 2, 1, 1, 3]);

let merchantCoupon = { a: 1, b: 2, c: 3 };
// let key = Object.keys(obj);
// console.log(key);

// let arr1 = [3, 2, 1];
// for (let i = 0; i < key.length; i++) {
//   let k = key[i];
//   // const currentMerchantCoupon = merchantCoupon[key].currentMerchantCoupon;
//   let newarr = obj[k].newarr;
//   console.log(newarr);
// }

const merchantCouponKeys = Object.keys(merchantCoupon);
for (let i = 0; i < merchantCouponKeys.length; i++) {
  const key = merchantCouponKeys[i];
  const currentMerchantCoupon = merchantCoupon[key].currentMerchantCoupon;
  console.log('currentMerchantCoupon',currentMerchantCoupon);
  
}