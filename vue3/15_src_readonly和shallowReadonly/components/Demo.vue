<template>
  <h4>当前的求和是:{{ sum }}</h4>
  <button @click="sum++">点我sum++</button>
  <hr />
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪水:{{ job.j1.salay }}k</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salay++">涨薪</button>
</template>
    
    <script>
// import { reactive,toRefs,shallowRef,shallowReactive } from "vue";
import { reactive, toRefs, ref,readonly,shallowReadonly  } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let sum =ref(0)
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salay: 20,
        },
      },
    });
    sum=readonly(sum)
    person=shallowReadonly(person)// 渐层只读,深层不是

    return {
      sum,
      ...toRefs(person),
    };
  },
};
</script>