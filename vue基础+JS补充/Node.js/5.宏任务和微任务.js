/*
    消息队列:
        在JS中消息队列有两种
            -宏任务队列 大部分代码都去宏任务队列排队
            -微任务队列 Promise的回调函数(then,catch,finally)
        执行流程:
            1.执行调用栈中的任务,
            2.执行微任务队列中的所有任务
            3.执行宏任务队列中的所有任务
*/ 

// queueMicrotask() //向微任务队列中添加一个任务

queueMicrotask(()=>{
    console.log(1)
})