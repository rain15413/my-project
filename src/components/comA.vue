<template>
  <div>
    <div>
      这是A组件
    </div>
    <button @click="sendMsg()">发送</button>
  </div>
</template>
<script> 
import {EventBus} from "@/utils/event-bus.js";
export default {
  methods: {
    sendMsg() {
      EventBus.$emit("aMsg", '来自A组件的消息');
    }
  },
  destroyed() {
    console.log('消除eventBus的监听')
    EventBus.$off('aMsg', {})
  }
}; 
</script>


