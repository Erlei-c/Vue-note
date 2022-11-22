<template>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪水:{{ job.j1.salay }}k</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salay++">涨薪</button>
</template>
    
    <script>
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salay: 20,
        },
      },
    });
    const name1 = person.name;
    console.log("###name1", name1);
    const name2 = toRef(person, "name");
    console.log("@@@name2", name2);
    const x = toRefs(person);
    console.log("$$$x", x);

    return {
      // 如下代码 不是响应式,而是简单的赋值
      /*
            let obj={a:1}
            a=obj.a
            a=100
        */
      // name:person.name, // 等同于 name=person.name
      // name:toRef(person,'name'),
      // age:toRef(person,'age'),
      // salay:toRef(person.job.j1,'salay'),

      ...toRefs(person),
    };
  },
};
</script>