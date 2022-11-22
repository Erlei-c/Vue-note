<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我加一</button>
  <hr>
  <h2>当前的信息为:{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <h2>薪水:{{person.job.j1.salay}}k</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salay++">涨薪</button>
</template>
  
  <script>
import { ref,reactive,watch,watchEffect } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let sum = ref(0);
    let msg=ref('你好!')
    let person=reactive({
        name:"张三",
        age:18,
        job:{
            j1:{
                salay:20
            }
        }
    })
    // 监视
    watch(sum,(newValue,oldValue)=>{
        console.log('sum的值变化了','新:',newValue,'旧:',oldValue)
    },{immediate:true})
    // watchEffect不用指定要监视的属性,而是在回调函数中用到的数据都会自动监视
    watchEffect(()=>{
        const x1=sum.value
        const x2=person.job.j1
        console.log('watchEffect所指定的回调执行了',x1,x2)
    })

    return {
      sum,
      msg,
      person
    };
  },
// vue2中的watch
//   watch:{
//      // 简写
//     sum(newValue,oldValue){
//         console.log('sum的值变化了','新:',newValue,'旧:',oldValue)
//     }
//      // 完整写法
//     sum:{
//         immediate:true,
//         deep:true,
//         handler(newValue,oldValue){
//             console.log('sum的值变化了','新:',newValue,'旧:',oldValue)
//         }
//     }
//   },
};
</script>