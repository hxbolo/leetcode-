// instanceof  可以正确判断对象类型  因为内部机制是通过判断对象的原型链中是不是能找到对应类型的prototype

function myinstanceof (left ,right){
  // 获取类型的原型
  let rprototype = right.rprototype
  // 获取对象的原型
  left = left.__proto__
  // 判断对象的类型是否等于类型的原型
  while(true){
    if(left === null){
      return false
    }
    if(rprototype ===  left){
      return true
    }
    left = left.__proto__
  }
}

console.log( myinstanceof('111',String) );
