<template>
  <div>
    <div>这里是首页</div>
    <div>{{result}}</div>
    <div>{{res}}</div>
    <div>{{info}}</div>
    <button class="btn-bg" @click="goMqtt">mqtt页面</button>

    <button @click="showMark">显示遮罩</button>
    <div v-if="open" class="mark-box">
      <div class="mark" v-clickoutside="closeMark"></div>
    </div>
    <div>
      <button @click='goPrint'>打印页</button>
      <button @click='goReport'>reportJS</button>
    </div>
  </div>
</template>

<script>
import '../../public/css/home.css' // 引入样式
// import { testApi, testBtnApi } from '../../api/test.js'
// import { Toast } from "vant";
import Clickoutside from 'element-ui/src/utils/clickoutside'
export default {
  data() {
    return {
      result: '',
      res: '',
      info: process.env.VUE_APP_CONFIG,
      open: false
    }
  },
  directives: {
    Clickoutside // vue自定义指令clickoutside，点击该元素的外部触发事件
  },
  mounted() {
    const gg = {
      age: 15,
      name: 'lilei'
    }
    console.log(gg)
    gg.name = 'lili'
    console.log(gg)
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
    showMark() {
      this.open = true
    },
    closeMark() {
      this.open = false
      console.log('关闭遮罩')
    },
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
    goPrint() {
      this.$router.push('print')
    },
    goReport() {
      this.$router.push('report')
    }
  }
}
</script>

<style scoped>
.mark-box{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
}
.mark{
  position: absolute;
  width: 500px;
  height: 300px;
  left: 50%;
  margin-left: -250px;
  top: 100px;
  background: #fff;
}
</style>