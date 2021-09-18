// 手写call
// call 改变this指向   传参以【 ，】 隔开

let obj = {
  name: 'hx',
  age: 18
}


Function.prototype.myCall  = function(context, ...args){
  context = context || window
  let fn = Symbol()
  context[fn] = this
  let retsult = context[fn](...args)
  delete context[fn]

  return retsult
}