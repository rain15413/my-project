<template>
  <div>
    <div>
      这是pageA页面
    </div>
    <div class="com-box">
      <com-a></com-a>
      <com-b></com-b>
    </div>
  </div>
</template>
<script>
import comA from '@/components/comA'
import comB from '@/components/comB'
export default {
  components: {
    comA,
    comB
  }
}
</script>
<style scoped>
  .com-box{
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
  }
</style>

