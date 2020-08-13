

// 三个状态：PENDING、FULFILLED、REJECTED
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
  constructor(executor) {
    // 默认状态为 PENDING
    this.status = PENDING;
    // 存放成功状态的值，默认为 undefined
    this.value = undefined;
    // 存放失败状态的值，默认为 undefined
    this.reason = undefined;
    // 存放成功回调
    this.onResolvedCallbacks = []
    // 存放失败回调
    this.onRejectedCallbacks = []

    // 调用此方法就是成功
    let resolve = (value) => {
      console.log(1111,this.status);
      
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        this.value = value;

        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    } 

    // 调用此方法就是失败
    let reject = (reason) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn=>fn());
      }
    }

    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者  
      executor(resolve,reject)
    } catch (error) {
      // 发生异常时执行失败逻辑
      reject(error)
    }
  }

  // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }

    if (this.status === PENDING) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      });

      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onRejectedCallbacks.push(()=> {
        onRejected(this.reason);
      })
    }


  }
}


const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    
    resolve('成功111111111');
  }, 1000);
  // resolve('成功');
}).then(
  (data) => {
    console.log('success', data)
  },
  (err) => {
    console.log('faild', err)
  }
)



function bubble (arr){
  for (let j = 0; j < arr.length ; j++){
    let complete = true 
    for(let i = 0 ; i< arr.length - 1 - j; i++){
      if(arr[i] > arr[i+1]){
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        complete = false
      }
      if(complete){

        break
      } 
    }
  }
  return arr
}

console.log(bubble([42,33,24,122,12,3,12,4,5,67,3,34]));
console.log('-1233'.split('').reverse().join(''));


function reverse(){

}

