console.log('script start');// 1

setTimeout(() => {
  console.log('北歌'); //10
}, 1 * 2000);

Promise.resolve()
.then(function() {
  console.log('promise1'); //4
}).then(function() {
  console.log('promise2');//8
});


async function foo() {
  await bar()
  console.log('async1 end') //5
}
foo()

async function errorFunc () {
  try {
    await Promise.reject('error!!!') //6
  } catch(e) {
    console.log(e)  
  7
  console.log('async1');  //8
  return Promise.resolve('async1 success')  //9
}
errorFunc().then(res => console.log(res)) 

function bar() {
  console.log('async2 end')  //2
}

console.log('script end');  //3
