<template>
  <div>
    <div>这里是首页</div>
    <!-- <div @click="testBtn">测试按钮</div> -->
    <div @click="send">测试按钮</div>
    <div>{{result}}</div>
    <div>{{res}}</div>
    <div>{{info}}</div>
    <button @click="goMqtt">mqtt页面</button>
  </div>
</template>

<script>
// import { testApi, testBtnApi } from '../../api/test.js'
// import { Toast } from "vant";
export default {
  data() {
    return {
      result: '',
      res: '',
      info: process.env.VUE_APP_CONFIG
    }
  },
  mounted() {

    // testApi().then(res => {
    //   console.log('testApi', res)
    // }).catch(err => {
    //   console.log(err)
    // })
    // Toast.success('成功文案');
    // let pro = process.env.VUE_APP_BASE_API
    // console.log('pro', pro)
  },
  methods: {
    // testBtn() {
    //   console.log('testBtnApi')
    //   let params = {}
    //   testBtnApi(params).then(res => {
    //     console.log('testBtnApi', res)
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // }
    goMqtt() {
      this.$router.push('mqtt')
    },
    send() {
      // var message = document.getElementById('text').value;
      var message = {
        "TYPE": "1",
        "PATH": "Plugins\\CallDLL\\CallDLL.dll",
        "METHOD": "CallString",
        "PARAM": [{
          "TYPE": "StringBuilder",
          "VALUE": "",
          "MODE": "1"
        }],
        "RETRUN_TYPE": "int"
      }
      console.log(1)
      var ajax = new XMLHttpRequest();
      ajax.open('post', 'http://localhost:9090/WebRunLocal/');
      // 注册事件
      let that = this
      ajax.onreadystatechange = function () {
        console.log(3)
        if (ajax.readyState == 4 && ajax.status == 200) {
          console.log(4)
          // document.getElementById("message").innerHTML += ajax.responseText + "<br/>"
          that.result += ajax.responseText + "<br/>"
          let res = JSON.parse(ajax.responseText)
          that.res = res.RETURN.VALUES
          console.log('res', res)
        }
      }
      console.log(2)
      // 发送
      // post请求 发送的数据 写在 send方法中
      ajax.send(JSON.stringify(message));
    }
  }
}
</script>

<style>

</style>