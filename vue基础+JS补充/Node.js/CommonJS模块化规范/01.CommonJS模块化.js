/*
    早期网页中,是没有一个实质的模块化规范的
        我们实现模块化的方式:就是最原始的通过script标签引入多个js文件
        问题:
            1.无法选择要引入模块中的哪些内容
            2.在复杂的模块场景下,非常容易出错
        在node中,默认支持的模块化规范叫做CommonJS
            要想使用ES的模块化,可以采用:
                1.使用mjs作为扩展名
                2.修改package.json将模块化规范设置为ES模块
                    "type": "module"
        CommonJS规范
            -引入模块
                -使用require('模块的路径')函数引入模块
                    模块名要以./ 或 ../ 开头
                    扩展名可以省略
            -引入核心模块
                -直接写核心模块的名字
                -也可以在核心模块前添加 node:
        默认情况下，Node.js会将以下内容视为CommonJS模块：
            1.使用.cjs为扩展名的文件
            2.当前的package.json的type属性为commonjs时，扩展名为.js的文件
            3.当前的package.json不包含type属性时，扩展名为.js的文件
            4.文件的扩展名是mjs、cjs、json、node、js以外的值时（type不是module时）
*/ 
const m1 = require('./m1.js')
const path = require('path')
console.log(m1)
console.log(path)