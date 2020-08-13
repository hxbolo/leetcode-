
// https://github.com/ConardLi/awesome-coding-js


// call apply bind

Function.prototype.myCall = function(context = window , ...args){
  if(this === Function.prototype){
    return undefined
  }
  context = context || window
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}

// 防抖和节流
// 防抖 （debounce）不管事件触发频率多高，一定在事件触发n秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，就以新的事件的时间为准，n 秒后才执行

// 应用场景
// 1-窗口大小变化， 调整样式
//  window.addEventListener('resize', debounce(handleResize, 200));
// 2-搜索框输入后1000毫秒进行搜索
//  debounce(fetchSelectData, 300);
// 3-表单验证，输入1000毫秒后验证
//  debounce(validator, 1000);
function debounce(event,time, flag){
  let timer = null 
  return function (...args){
    clearTimeout(timer)
    if(flag && !timer){
      event.apply(this,args)
    }
    timer = setTimeout(() => {
      event.apply(this,args)
    }, time);
  }
}


// 节流（throttle） ： 不管事件出发频率多高， 只在单位时间内触发一次
function throttle(event, time){
  let pre = 0
  let timer = null
  return function(...args){
    if(Date.now() - pre > time ){
      clearInterval(tiemr)
      timer = null
      pre = Date.now()
      event.apply(this,args)
    }else if(!timer){
      timer = setTimeout(() => {
        event.apply(this,args)
      }, time);
    }
  }

}







