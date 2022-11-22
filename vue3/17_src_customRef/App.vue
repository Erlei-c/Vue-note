<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import { customRef } from 'vue';

export default {
  name: 'App',
  setup() {
    // 自定义一个ref,名为:myref
    function myref(value){
      let timer
      return customRef((track,trigger)=>{
        return {
          get(){
            console.log(`有人从myref这个容器中读取了数据,我把${value}交给他了`)
            track() // 通知Vue追踪value的变化(提前和get商量一下,让他认为这value是有用的)
            return value
          },
          set(newValue){
            console.log(`有人把myref这个容器中的数据改为了:${newValue}`)
            clearTimeout(timer)
            timer=setTimeout(() => {
              value= newValue
              trigger() // 通知Vue去重新解析模版
            }, 1000);
            // value= newValue
            
          }
        }
      })

    }
    // let keyWord=ref('hello') // 使用vue提供的ref
    let keyWord=myref('hello') // 使用程序员自定义的ref

    return {
      keyWord,
    }
  }
}
</script>