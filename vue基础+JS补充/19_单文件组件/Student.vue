<template>
  <div>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学校地址:{{ age }}</h2>
    <button @click="showName">点我显示名</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>
