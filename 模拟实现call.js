function add (x,y){
  console.log(this);
  return this.a+x+y
}
let obj = {a:1}
// console.log( add.call(obj,1,3));

Function.prototype.my_call = function(conext, ...param){
  conext.fn = this
  let args = []
  for(let i = 0 ; i < arguments.length ; i++){
    args.push('arguments[' + i + ']');
  }
//  let res = eval('conext.fn('+ args+')')
 let res =  conext.fn(...arguments)
  delete conext.fn
  return res
}

// console.log( add.my_call(obj,1,2) );

//模拟bind 
// 特点 
// 1.返回一个函数
// 2.可以传入参数
// 3.难点： 一个绑定函数也能使用new 操作符创造对象，  bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效

var foo = {
  value: 13
};

function bar(name , age) {
  console.log(this.value,this,'bar----this');
  console.log(name,age,'name , age');
  return this.value + name + age
}

// 返回了一个函数
// var bindFoo = bar.bind(foo); 

// bindFoo(); // 1



// Function.prototype.my_bind = function(context){

//   if(typeof this !== 'function'){
//     throw new Error('需要一个函数')
//   }
//   console.log('this',this , context);
//   var self = this
//   // 获取my_bind 中的第二个参数到最后一个参数， 可以通过slice.call ,移除第一项，然后转成真数组
//   var args = Array.prototype.slice.call(arguments,1)

//   var fNOP = function () {}

//   var fBound = function(){
    
//     // 把调用bind 返回的函数，拿到arguments的数据转成真数组
//     let bindArgs = Array.prototype.slice.call(arguments)
//     // 合并调用的所有传入的参数
//     let allArgs = args.concat(bindArgs)
//     // 使用bind  会返回一个函数， this会指传入的第一个参数， 所以会把这个函数中的this 使用apply，来改变他，
//     // this instanceof fBount 用来判断这个函数是否是被new 出来的， 
//     // 当作为构造函数时， this 只指向实例，  此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
//     // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context

//     return self.apply( this instanceof fBound ? this : context,allArgs)
//   }
//   // 修改返回函数的 prototype 为绑定函数的prototype ,实例就可以继承绑定函数的原型中的值
//   fBound.prototype = this.prototype
//   fBound.prototype = new fNOP()
//   return fBound
// }

// let bindFoo = bar.my_bind(foo,'hx')
// console.log(

//   bindFoo('11',1,2)
// );


// ========================================
// 特点
// 1.返回一个函数
// 2、可以传参
// 3、 返回的函数可以被new

let test = {
  name : 'hx'
}

function bar(age, ts){
  console.log(this, this.name,age, ts);
}

let barFn = bar.bind(test)
console.log(barFn(1));

Function.prototype.bind1 = function(context){
  console.log('this',this);
  let self = this
  // 获取传入参数
  let args = Array.prototype.slice.call(arguments,1)
  let fNOP = function () {} 
  let fBound = function(){
    let bindArgs = Array.prototype.slice.call(arguments)
    return self.apply( this instanceof fNOP ? this : context,args.concat(bindArgs))
  }
  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound
}

let aaa = bar.bind1(test,'16')
let bb =  new aaa('18',4)