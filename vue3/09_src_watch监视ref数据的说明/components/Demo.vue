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
import { ref,watch } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let sum = ref(0);
    let msg=ref('你好!')
    let person=ref({
        name:"张三",
        age:18,
        job:{
            j1:{
                salay:20
            }
        }
    })
    // 这时sum不加.value 因为.value是0 是一个基本类型的值
    watch(sum,(newValue,oldValue)=>{
        console.log('sum的值变化了','新:',newValue,'旧:',oldValue)
    })
    // 此时加.value是因为.valuel的数据是通过reactive创建的
    // 直接使用person时需要加上deep:true 才可以监视到内部对象的改变
    watch(person.value,(newValue,oldValue)=>{
        console.log('person的值变化了','新:',newValue,'旧:',oldValue)
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