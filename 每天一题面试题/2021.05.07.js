// 为什么 0.1 + 0.2 !== 0.3，请描述原因并手写解决该问题的函数。

// 因为 Js计算会转换成二进制计算， 精度会丢失

// 解决方案 
// console.log(  ((0.1 * 100) + (0.2 *100) )/100 );

function add (a, b ){
  return parseFloat((a+b)).toFixed(2)
}

console.log(add(0.1, 0.2));


const a = {
  b: 2,
  foo: function () { console.log(this) }
}

function b(foo) {

  // 输出什么？
  foo()
}

b(a.foo)


// 手写new 

const argText = function(Fn, ...argument){
  // 创建对象

  const obj = {}
  // this指向这构造函数
  const result = Fn.call(obj, ...argument)
// 3.如果该构造函数的返回值是Object类型则返回该对象
  if(result instanceof Object){
    return result
  }
  
  // 执行构造函数
  obj.__proto__ = Fn.prototype
  obj.__proto__.constructor = Fn
  // 返回这个对象

  return obj
}

function Person(name, age){
  this.name = name
  this.age = age
}

Person.prototype.type = 'jjj'
let person =  argText(Person, 'hx','18')
console.log(person);
