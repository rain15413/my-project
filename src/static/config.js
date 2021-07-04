
// Broker: broker.emqx.io
// TCP Port: 1883
// Websocket Port: 8083

// mqtt的配置项
const config = {
  host: 'broker.emqx.io', // hostname or IP address ,自己配的消息队列服务，这里用的在线的服务，测试工具的话也会放到github；地址在最下方！
  port: 8083,  //端口
  addtopic: 'add', //约定的主题
  useTLS: false,
  username: null,
  password: null,
  cleansession: false
}

export {
  config
}