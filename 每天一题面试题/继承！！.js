// 原型链继承

function SuperType(){
  this.property = true
}

SuperType.prototype.getSuperValue = function() {
  return this.property
}

function SuperType () {
  this.subproperty = false
}

