
// 创建Promise时,构造函数中需要一个函数作为参数
// Promise构造函数的回调函数,会在创建Promise时调用,调用时会有两个参数传递进去
const promise=new Promise((resolve,reject)=>{
    // resolve和reject是两个函数,通过这两个函数可以向Promise中存储数据
    // resolve在执行正常时存储数据,reject在执行错误时存储数据
    setTimeout(() => {
        resolve('哈哈')
    }, 2000);
})

/*
    从Promise中读取数据
        -可以通过Promise的实例方法then来读取Promise中存储的数据
        -then需要两个回调函数作为参数,回调函数用来获取Promise中的数据
            通过resolve存储的数据,会调用第一个函数返回,
                可以在第一个函数中编写处理数据的代码
            通过reject存储的数据或者出现异常时,会调用第二个函数返回,
                可以在第二个函数中编写处理异常的代码
*/ 
promise.then(
    (result)=>{
        console.log(result)
    },
    (reason)=>{
        console.log(reason)
    }
)
/*
    Promise中维护了两个隐藏属性:
        PromiseResult
            -用来存储数据
        PromiseState
            -记录Promise的状态
                pending(进行中)
                fulfilled(完成) 通过resolve存储数据时
                rejected(拒绝,出错了) 通过reject或出错时存储数据时
            PromiseState只能修改一次,修改以后永远不会变
        流程:
            当Promise创建时,PromiseState初始值为pending
                当通过resolve存储数据时,PromiseState变为fulfilled
                PromiseResult变为存储的数据
                当通过reject存储数据时,PromiseState变为rejected
                PromiseResult变为存储的数据 或 异常对象
            当我们通过then读取数据时,相当于为Promise设置了回调函数
                如果PromiseState变为fulfilled,则调用第一个回调函数来返回数据
                如果PromiseState变为rejected,则调用第二个回调函数来返回数据
*/ 
const promise2 = new Promise((resolve,reject)=>{
    resolve('haha')
})
/*
    catch() 用法和then类似,但是只需要一个回调函数作为参数
        catch()中的回调函数只会在Promise被拒绝时才会调用
        catch()相当于 then(null,reason()=>{})
        catch() 就是第一个专门处理Promise异常的方法

    finally() 
        -无论是正常存储数据还是出现异常了,finally总会执行
        finally的回调函数不会接受到数据
        finally通常用来编写一些无论成功与否都要执行的代码
*/ 
promise2.catch(reason=>{
    console.log(222)
})
promise2.finally(()=>{
    console.log('总会执行')
})
console.log(promise2)