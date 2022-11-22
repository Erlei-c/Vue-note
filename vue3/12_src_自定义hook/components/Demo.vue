<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我加一</button>
  <hr>
  <h2>当前鼠标点击时的坐标:x:{{point.x}},y:{{point.y}}</h2>
</template>
  
  <script>
import { ref } from "vue";
import uesPoint from '../hooks/usePoint'
export default {
  name: "App",
  setup() {
    // 数据
    let sum = ref(0);
    let point=uesPoint()
    return {
      sum,
      point
    };
  },
};
</script>