/*
    nodejs文档
    https://nodejs.dev/en/
    async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。
    await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用。
        await阻塞的只是异步函数内部的代码,不会影响外部代码
        通过await调用异步代码时,需要通过try-catch来处理异常
    如果async声明的函数中没有写await那么它里面的代码就会一次执行
*/ 
// async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。
async function helloAsync(){
    return "helloAsync";
  }
  
console.log(helloAsync())  // Promise {<resolved>: "helloAsync"}
 
helloAsync().then(v=>{
   console.log(v);         // helloAsync
})
// async 函数中可能会有 await 表达式，async 函数执行时，如果遇到 await 就会先暂停执行 ，等到触发的异步操作完成后，恢复 async 函数的执行并返回解析值。
function testAwait(){
    return new Promise((resolve) => {
        setTimeout(function(){
           console.log("testAwait");
           resolve();
        }, 1000);
    });
 }
// await 关键字仅在 async function 中有效。如果在 async function 函数体外使用 await ，你只会得到一个语法错误。
 async function helloAsync(){
    await testAwait();
    console.log("helloAsync");
  }
 helloAsync();
 // testAwait
 // helloAsync
// await针对所跟不同表达式的处理方式：
    // 1.Promise 对象：await 会暂停执行，等待 Promise 对象 resolve，然后恢复 async 函数的执行并返回解析值。
    // 2.非 Promise 对象：直接返回对应的值。