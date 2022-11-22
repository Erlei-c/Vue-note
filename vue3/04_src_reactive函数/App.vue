<template>
  <!-- Vue3组件中的模版结构可以没有根标签 -->
  <h1>我是app组件</h1>
  <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <h3>工作种类:{{person.job.type}}</h3>
  <h3>工作薪水:{{person.job.salary}}</h3>
  <h3>爱好:{{person.hobby}}</h3>
  <h3>测试的数据:{{person.job.a.b.c}}</h3>
  <button @click="changeInfo">修改一个人的信息</button>
</template>

<script>
// import { ref} from 'vue'
import { reactive } from 'vue'
export default {
  name: 'App',
  // 组件中所有用到的:数据,方法等均要配置再setup中
  setup(){
    // 数据
    // refImpl:reference-implement 引用-实现 引用实现实例对象,简写:引用对象
    let person=reactive({
        name:'张三',
        age:18,
        job:{
          type:'前端工程师',
          salary:'30k',
          a:{
            b:{
              c:666
            }
          }
        },
        hobby:['抽烟','喝酒','烫头'],
    })
    // 方法
    function changeInfo(){
      person.name='李四'
      person.age=25
      person.job.type='全栈工程师'
      person.job.salary='50k'
      person.job.a.b.c=777
      person.hobby=[1,2,3]
    }
    return{
      person,
      changeInfo,
    }
  }
}
</script>