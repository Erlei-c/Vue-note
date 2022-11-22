<template>
  <div class="Child">
    <h3>我是Child组件</h3>
    {{sum}}
  </div>
</template>
  
  <script>
import { ref } from '@vue/reactivity';
export default {
  name: "Child",
  async setup(){
    let sum=ref(0)
    let p=new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve({sum})
      }, 2000);
    })
    return await p
  }
};
</script>
  
  <style>
.Child {
  background-color: skyblue;
  padding: 10px;
}
</style>