/*
    静态方法:
        Promise.resolve() 创建一个立即完成的Promise
        Promise.reject() 创建一个立即拒绝的Promise
        Promise.all([]) 同时返回多个Promise的执行结果
            其中有一个报错,就返回错误
        Promise.allSettled([...])同时返回多个Promise的执行结果
            无论成功错误
        Promise.race([...]) 返回执行最快的Promise 不考虑对错
        Promise.any([...]) 返回执行最快完成的Promise
*/ 

/*
Promise.resolve(10)
等价于
new Promise((resolve,reject)=>{
    resolve(10)
})
*/ 
function sum(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(a+b)
        }, 1000);
    })
}
// 需要三个执行同时返回结果
// sum(123,456)
// sum(456.789)
// sum(678,890)
Promise.all([
    sum(123,456),
    sum(456,789),
    sum(678,890),
    // Promise.reject('error')
]).then(result => console.log(result))

Promise.allSettled([
    sum(123,456),
    sum(456,789),
    sum(678,890),
    Promise.reject('error')
]).then(result => console.log(result))

Promise.race([
    sum(123,456),
    sum(456,789),
    sum(678,890),
    Promise.reject('error')
]).then(result => console.log(result))

Promise.any([
    sum(123,456),
    sum(456,789),
    sum(678,890),
    Promise.reject('error')
]).then(result => console.log(result))