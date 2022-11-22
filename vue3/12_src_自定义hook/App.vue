<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo"></Demo>
  <DemoTwo/>
</template>

<script>
import { ref } from 'vue';
import Demo from './components/Demo.vue'
import DemoTwo from './components/DemoTwo.vue'
export default {
  name: 'App',
  components:{Demo,DemoTwo},
  setup() {
    let isShowDemo=ref(true)

    return {
      isShowDemo
    }
  }
}
</script>