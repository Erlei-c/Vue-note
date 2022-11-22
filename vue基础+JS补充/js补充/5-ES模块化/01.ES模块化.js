/*
    ES模块化
*/ 
// 引入m1模块
import{a,b,c} from './m1.js'
// 通过as指定别名
import{a as ten,b,c} from './m1.js'
// 引入模块中的所有内容 并命名为m4
import * as m4 from './m1.js'
// 导入模块的默认导出 可以随意命名
// 通过ES模块化导入的内容都是常量 不影响对象属性的修改
import sum from './m1.js'
console.log(ten,b,c);