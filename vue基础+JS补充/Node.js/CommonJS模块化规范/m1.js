
console.log('我是m1模块')

/*
    在定义模块时,模块中的内容默认是不能被外部看到的
        可以通过exports 来设置向外暴露内容
    访问exports的方式有两种
        exports
        module.exports
        - 当我们在其他模块中引入当前模块时,require函数返回的就是exports
        -可以将希望暴露给外部模块的内容设置为exports的属性
        可以一个一个暴露
        exports.a=10
        也可以暴露一个对象
        module.exports={
            a:10,
            b:20,
            c:()=>{
                console.log(111)
            }
        }
*/ 
// console.log(exports);
module.exports={
    a:10,
    b:20,
    c:()=>{
        console.log(111)
    }
}
