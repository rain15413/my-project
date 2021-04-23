<template>
  <div>
    <div>这里是首页</div>
    <div @click="testBtn">测试按钮</div>
  </div>
</template>

<script>
import { testApi, testBtnApi } from '../../api/test.js'
import { Toast } from "vant";
export default {
  data() {
    return {

    }
  },
  mounted() {
    testApi().then(res => {
      console.log('testApi', res)
    }).catch(err => {
      console.log(err)
    })
    Toast.success('成功文案');
    let pro = process.env.VUE_APP_BASE_API
    console.log('pro', pro)
  },
  methods: {
    testBtn() {
      console.log('testBtnApi')
      let params = {}
      testBtnApi(params).then(res => {
        console.log('testBtnApi', res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>