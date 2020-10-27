let qp  = function(arr){
  if(arr.length<1) return arr
//  let num = arr[0]
 let num = Math.floor(arr.length / 2)
 let left =[]
 let right =[]
 let point = arr.splice(num,1)[0]
 
 for (let i = 0; i < arr.length; i++) {
  if(arr[i]< point){
    left.push(arr[i])
  }else{
    right.push(arr[i])

  }
 }
 console.log(left,right);
 

 return qp(left).concat(point,qp(right));
 
 
  
}
qp([3,5,6,8,4,9,1,12])