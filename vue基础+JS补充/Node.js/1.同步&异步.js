/*
    进程和线程
        -进程
            程序运行的环境
        -线程
            线程是实际进行运算的东西

        同步
            -通常情况下代码是从上到下一行行执行的
            -前面的代码不执行,后面的代码也不会执行
            -同步的代码执行会出现阻塞的情况
        解决同步问题:
            JAVA python
                -通过多线程来解决
            node.js
                -通过异步
        
        异步:
            -一段代码的执行不会影响到其他程序
            -异步的问题:
                异步代码无法通过return 来设置返回值
            -特点:
                1.不会阻塞其他代码的执行
                2.需要通过回调函数来返回结果
            -基于回调函数的异步带来的问题
                1.代码的可读性差
                2.可调试性差
            -解决问题:
                -需要一个东西,可以代替回调函数来给我们返回结果
                -Promise
                    -Promise是一个可以存储数据的对象
                        Promise存储数据的方式比较特殊,
                        这种特殊方式可以使得Promise用来存储异步调用的数据
*/ 

function sum(a,b,cb){
    const begin=Date.now()
    setTimeout(()=>{
        cb(a+b)
    },10000)
}

console.log('Hello')
sum(123,456,(result)=>{
    console.log(result)
})
sum(123,456,(result)=>{
    sum(result,456,(result)=>{
        sum(result,456,(result)=>{
            sum(result,456,(result)=>{
                console.log(result)
            })    
        })
    })
})
console.log('Hello')

