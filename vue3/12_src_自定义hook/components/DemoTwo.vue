<template>
  <h1>我是DemoTwo组件</h1>
  <h1>x:{{point.x}},y:{{point.y}}</h1>
</template>

<script>
import uesPoint from "../hooks/usePoint";
export default {
  name: "DemoTwo",
  setup() {
    let point=uesPoint()
    return{point}
  }
};
</script>

<style>
</style>