// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
// 输入：s = "We are happy."
// 输出："We%20are%20happy."

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  // let arr = s.split("");
  // let a = [];
  // return arr.reduce((str, val) => {
  //   val == " " ? a.push("%20") : a.push(val);
  //   return (str = a.join(""));
  // }, "");
  var str = s.replace(/\s{1}/g, "%20");
  return str;
};

replaceSpace("We are happy.");
