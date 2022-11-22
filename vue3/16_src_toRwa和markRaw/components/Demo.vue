<template>
  <h4>当前的求和是:{{ sum }}</h4>
  <button @click="sum++">点我sum++</button>
  <hr />
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪水:{{ job.j1.salay }}k</h2>
  <h2 v-show="person.car">汽车信息:{{ person.car }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salay++">涨薪</button>
  <button @click="showRawPerson">输出最原始的perosn</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name='奥迪'">换车名</button>
  <button @click="person.car.price++">换车价格</button>
</template>

<script>
import { reactive, toRefs, ref,toRaw, markRaw, } from "vue";
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

    function showRawPerson(){
       let p= toRaw(person)
       console.log(p)
    }
    function addCar(){
        let car={name:"奔驰",price:40}
        // person.car=car // 此时的car添加之后还是响应式的
        person.car=markRaw(car) // 此时的car添加之后就不是响应式了
    }
    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    };
  },
};
</script>