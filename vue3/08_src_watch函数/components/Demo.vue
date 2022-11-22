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
import { ref,reactive,watch } from "vue";
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
    // 情况一:监视ref所定义的一个响应式数据
    // watch(sum,(newValue,oldValue)=>{
    //     console.log('sum的值变化了','新:',newValue,'旧:',oldValue)
    // },{immediate:true})

    // 情况二:监视ref所定义的多个响应式数据
    // watch([sum,msg],(newValue,oldValue)=>{
    //     // 监视多个时,值变为了数组
    //     console.log('sum或msg的值变化了','新:',newValue,'旧:',oldValue)
    // },{immediate:true})

    /*
        情况三:监视reactive所定义的一个响应式数据的全部属性
            1.注意:此处无法正确获取oldValue
            2.注意:强制开了深度监视(deep配置无效)
    */ 
    // watch(person,(newValue,oldValue)=>{
    //     // 注意:此处无法正确获取oldValue
    //     console.log('person变化了',newValue,oldValue)
    // },{deep:false})

    // 情况四:监视reactive所定义的一个响应式数据中的某个属性
    // watch(() => person.age,(newValue,oldValue)=>{
    //     console.log('person的age变化了',newValue,oldValue)
    // })

    // 情况五:监视reactive所定义的一个响应式数据中的某些属性
    // watch([() => person.age,() => person.name],(newValue,oldValue)=>{
    //     console.log('person的age或name变化了',newValue,oldValue)
    // })

    // 特殊情况:
    watch(() => person.job,(newValue,oldValue)=>{
        console.log('person的job变化了',newValue,oldValue)
    },{deep:true}) // 此处由于监视的是reactive所定义的对象中的某个属性,所以deep配置有效

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