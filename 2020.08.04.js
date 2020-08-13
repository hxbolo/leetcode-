// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc" 

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // let arr = s.split(' ')
  // console.log(arr);
  // let newArr = []
  // arr.map(item=>{
  //  console.log( item.split('').reverse().join(''));
  //  newArr.push( item.split('').reverse().join(''))
  // })
  // let b = newArr.join(' ')
  
  // return b

  let arr=s.split("").reverse().join("")
  
  return arr.split(" ").reverse().join(" ")
};
reverseWords( "Let's take LeetCode contest")
// console.log(reverseWords( "Let's take LeetCode contest"));



// 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
//  输入：[1, 2, 3, 3, 2, 1]
//  输出：[1, 2, 3]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
 return Array.from(new Set(head))
};



  removeDuplicateNodes([1, 1, 1, 1, 2])





 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

//  输入：head = [1,3,2]
//  输出：[2,3,1]
var reversePrint = function(head) {
  if(!head) return
  return head.reverse()
  // console.log( head.reverse());
  


};
reversePrint([1,3,2])


// 给定两个数组，编写一个函数来计算它们的交集。

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  // let arr = []
  // for(let i = 0 ; i<nums1.length ; i ++){
    
  //   for(let j = 0 ; j<nums2.length ; j ++){
      
  //     if(nums1[i] == nums2[j]){
  //       arr.push(nums2[j])
  //     }
      
  //   }
  // }
  // return  Array.from(new Set(arr))

  // 交集
  // return Array.from(new Set(nums1.filter(item=> nums2.includes(item)))) 

  // 并集
  console.log( nums1.concat(nums2.filter(item=> !nums1.includes(item))));
  // a.concat(b.filter((v) => !a.includes(v)))
 return nums1.concat(nums2.filter(item=> !nums1.includes(item)))
};

console.log(intersection([1, 2, 3],[2,3,5, 4, 5]));

// intersection([1,2,2,1],[2,2])


