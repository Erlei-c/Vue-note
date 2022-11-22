<template>
  <!-- Vue3组件中的模版结构可以没有根标签 -->
  <h1>我是app组件</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>性别:{{sex}}</h2>
  <button @click="sayHello">弹窗(Vue3)</button>
  <button @click="sayWelcome">弹窗(Vue2)</button>
  <br>
  <button @click="test1">测试一下在Vue2配置中读取Vue3的配置</button>
  <button @click="test2">测试一下在Vue3配置中读取Vue2的配置</button>
</template>

<script>
// import {h} from 'vue'
export default {
  name: 'App',
  // 向下兼容vue2中的写法(但不建议这么写)
  // 在Vue2中的配置可以读取到Vue3的配置,但Vue3中读取不到Vue2中配置,如有重名setup优先
  // setup不能是一个asynv函数,因为返回值不再是return的对象,而是promise,模版看不到return对象中的属性
  data() {
    return {
      sex:'男'
    }
  },
  methods: {
    sayWelcome(){
      alert('欢迎!')
    },
    test1(){
      console.log(this.sex)
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
      this.sayHello()
    }
  },
  // 组件中所有用到的:数据,方法等均要配置再setup中
  setup(){
    // 数据,此时的数据不是响应式的数据,数据的更改不会引起页面的变化
    let name='张三'
    let age=18
    // 方法
    function sayHello(){
      alert(`我叫${name},我${age}岁了,你好啊!`)
    }
    function test2(){
      console.log(name)
      console.log(age)
      console.log(sayHello)
      console.log(this.sex)
      console.log(this.sayWelcome)
      this.sayWelcome()
    }
    // setup函数的两种返回值
    // 1.若返回一个对象,则对象中的属性,方法,在模版中可以直接使用
    return{
      name,
      age,
      sayHello,
      test2,
    }
    // 2.若返回一个渲染函数,则可以自定义渲染内容
    //  (1)参数:第一个参数为标签名,第二个参数为内容
    //  (2)需先引入h import {h} from 'vue'
    // return ()=>h('h1','HelloWorld')
  }
}
</script>