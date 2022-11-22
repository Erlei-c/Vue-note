function sum(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(a+b)
        }, 1000);
    })
}
/*
    Promise中的then catch finally
        -这三个方法都会返回一个新的Promise
        finally的返回值不会存储到新的Promise中

    对Promise进行链式调用时
        后面的方法(then和catch)读取到的是上一步的执行结果
            如果上一步的执行结果,不是想要的结果,则跳过当前的方法

    当Promise出现异常时,而整个调用链中没有出现catch则异常会向外抛出
*/ 
sum(123,456)
    .then(result => result+7)
    .then(result => result +70)
    .then(result => console.log(result))