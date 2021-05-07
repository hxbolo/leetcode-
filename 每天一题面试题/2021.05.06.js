try {
  (async function() { a().b().c() })()
} catch (e) {
  console.log(`执行出错：${e.message}`)
};

//a is not defined   
// try catch  是同步的  无法捕捉异步代码的错误
// async 执行了未定义的a ()， 被promise中的reject 捕获到就报错