<template>
    <h1>我是Demo组件</h1>
    <h2>姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <slot name="abc"></slot>
    <button @click="test1">测试触发一下Demo组件的Hello事件</button>
  </template>
  
  <script>
  import { reactive } from 'vue'
  export default {
    name: 'App',
    props:['msg'],
    emits:['hello'],
    setup(props,context){
        // console.log('---setup---',props,context)
        // console.log('---setup---',context.attrs) // 相当于Vue2中$attrs
        // console.log('---setup---',context.emit) // 相当于Vue2中$emit 触发自定义事件
        console.log('---setup---',context.slots) // 插槽

      // 数据
      let person=reactive({
          name:'张三',
          age:18,
      })
      // 方法
      function test1(){
        context.emit('hello',666)
      }
      return{
        person,
        test1
      }
    }
  }
  </script>