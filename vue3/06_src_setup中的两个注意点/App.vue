<template>
  <Demo msg="Hello" @hello="showHelloMsg">

    <template v-slot:abc>
      <span>你好,这里是App </span>
    </template>
    
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components:{Demo},
  setup() {
    function showHelloMsg(value){
      alert(`你触发了Hello事件,我收到的参数是:${value}`)
    }

    return {
    showHelloMsg
    }
  }
}
</script>