<template>
  <div>
    这是B组件
    <div>
      使用eventBus接收的消息：{{msg}}
    </div>
  </div>
</template>
<script>
import { EventBus } from "@/utils/event-bus.js";
export default {
  data(){
    return {
      msg: ''
    }
  },
  mounted() {
    EventBus.$on("aMsg", (msg) => {
      // A发送来的消息
      console.log(msg)
      this.msg = msg;
    });
  },
  destroyed() {
    console.log('消除eventBus的监听')
    EventBus.$off('aMsg', {})
  }
};
</script>


