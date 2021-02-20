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

console.log( add.my_call(obj,1,2) );

