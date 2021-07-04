<template>
  <div>
    这是mqtt页面
    <div>收到的消息：</div>
    <div class="note-box">
      <div class="note" v-for="(item, index) in content" :key='index'>{{item}}</div>
    </div>
    <button @click="goA">跳转</button>
    <button @click="close">断开</button>
  </div>
</template>
<script>
// import mqtt from 'mqtt'
import Mqtt from '@/utils/mqttjs.js'
import {config} from '@/static/config'

export default {
  data () {
    return { 
      msg: '',
      client: '',
      content: [],
      connection: {
        host: 'broker.emqx.io',
        port: 8083,
        endpoint: '/mqtt',
        clean: true, // 保留会话
        connectTimeout: 4000, // 超时时间
        reconnectPeriod: 4000, // 重连时间间隔
        // 认证信息
        clientId: this.getuuid(), // 唯一值，防止多浏览器的冲突
        username: '',
        password: '',
      },
      subscription: { // 订阅的属性
        topic: 'topic/msg/#', // 通配符#，订阅多个主题时，如：to/add、to/t等
        qos: 2,
          // qos 0，最多一次送达。也就是发出去就fire掉，没有后面的事情了。
          // qos 1，至少一次送达。发出去之后必须等待ack，没有ack，就要找时机重发
          // qos 2，准确一次送达。消息id将拥有一个简单的生命周期。
      },
      subscription1: { // 订阅的属性
        topic: 'tt',
        qos: 2,
          // qos 0，最多一次送达。也就是发出去就fire掉，没有后面的事情了。
          // qos 1，至少一次送达。发出去之后必须等待ack，没有ack，就要找时机重发
          // qos 2，准确一次送达。消息id将拥有一个简单的生命周期。
      },
    } 
  },
  mounted() {
    console.log('config', config)
    // 建立mqtt连接
    // this.MQTTconnect()
    this.getConnect()
  },
  methods: {  
    goA() {
      this.$router.push('pageA')
    },
    close() {
      this.client.close()
    },
    getConnect() {
      let topicArr = ['topic/msg/add', 'topic/msg/ass', 'topic/msg/aff', 'topic/msg/agg', 'topic/msg/ahh', 'topic/msg/all']
      let par = {
        connection: this.connection,
        topic: topicArr,
        handleData: (topic, message) => {
          // 接收到的消息体 res
          // 订阅的主题 topic
          console.log('cb', message)
          this.content.unshift(message)
        }
      }
      this.client = new Mqtt(par)
    },
    // MQTTconnect() {
    //   // 连接mqtt
    //   let that = this
    //   // this.connection.clientId = this.getuuid()
    //   console.log('connection', this.connection)
    //   const { host, port, endpoint, ...options } = this.connection
    //   const connectUrl = `ws://${host}:${port}${endpoint}`
    //   try {
    //     // 建立连接
    //     this.client = mqtt.connect(connectUrl, options)
    //   } catch (error) {
    //     console.log('mqtt.connect error', error)
    //   }
    //   // 进行连接
    //   this.client.on('connect', () => {
    //     console.log('Connection succeeded!')
    //     that.doSubscribe() // 连接成功，进行订阅
    //     // that.doSubscribe1() // 连接成功，进行订阅
    //   })
    //   // 连接报错的信息
    //   this.client.on('error', error => {
    //     console.log('Connection failed', error)
    //   })
    //   // 接收消息
    //   this.client.on('message', (topic, message) => {
    //     // let msg = JSON.parse(message)
    //     this.content.unshift(message)
    //     console.log('content', this.content)
    //     console.log(`Received message ${message} from topic ${topic}`)
    //   })
    // },
    // // 进行订阅
    // doSubscribe() {
    //   // 订阅多个主题可以用数组
    //   let topicArr = ['topic/msg/add', 'topic/msg/ass', 'topic/msg/aff', 'topic/msg/agg', 'topic/msg/ahh', 'topic/msg/all']
    //   let qos = 2
    //   this.client.subscribe(topicArr, qos, (error, res) => {
    //     if (error) {
    //       console.log('Subscribe to topics error', error)
    //       return
    //     }
    //     // this.subscribeSuccess = true
    //     console.log('Subscribe to topics res', res)
    //   }) 

    // },
    //uuid随机生成
    getuuid() {
      var uid = [];
      var hexDigits = "0123456789abcdefghijklmnopqrst";
      for (var i = 0; i < 32; i++) {
        uid[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      uid[6] = "4";
      uid[15] = hexDigits.substr((uid[15] & 0x3) | 0x8, 1);
      var uuid = uid.join("");
      return uuid;
    },
         
  }
}
</script>
<style scoped>
.note-box{
  width: 200px;
  height: 90px;
  overflow: auto;
  border: 1px solid black;
  margin: 0 auto;
}
.note{
  width: 100%;
  height: 20px;
  border-bottom: 1px solid red;
}
</style>