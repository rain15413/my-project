import mqtt from 'mqtt'

const Mqtt = function (params) {

  const { host, port, endpoint, ...options } = params.connection
  const connectUrl = `ws://${host}:${port}${endpoint}`
  try {
    // 建立连接
    this.connect = mqtt.connect(connectUrl, options)
  } catch (error) {
    console.log('mqtt.connect error', error)
  }
  // 进行连接
  this.connect.on('connect', () => {
    console.log('Connection succeeded!')
    doSubscribe(params.topic) // 连接成功，进行订阅
  })
  // 连接报错的信息
  this.connect.on('error', error => {
    console.log('Connection failed', error)
  })
  // 接收消息
  this.connect.on('message', (topic, message) => {
    console.log(`Received message ${message} from topic ${topic}`)
    console.log(message)
    params.handleData && params.handleData(topic, message)
  })
  // 进行订阅
  let that = this
  function doSubscribe(topicArr) {
    // 订阅多个主题可以用数组
    let qos = 2
    that.connect.subscribe(topicArr, qos, (error, res) => {
      if (error) {
        console.log('Subscribe to topics error', error)
        return
      }
      // this.subscribeSuccess = true
      console.log('Subscribe to topics res', res)
    }) 

  }

  // 关闭
  this.close = function () {
    if (this.connect.connected) {
      try {
        this.connect.end()
        this.connect = {
          connected: false,
        }
        console.log('Successfully disconnected!')
      } catch (error) {
        console.log('Disconnect failed', error.toString())
      }
    }
  }
}

export default Mqtt