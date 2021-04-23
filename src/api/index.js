import axios from 'axios'
import { Toast } from "vant"

console.log('url', process.env.VUE_APP_BASE_API)
const asking = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})
// asking request 拦截器
// 每次请求都为asking头增加Authorization字段，其内容为Token
asking.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.common['Authorization'] = token
      // config.headers.Authorization = token
    }
    return config
  },
  error => {
    console.log('errorRequest', error)
    Toast({
      message: error.msg
    })
    return Promise.reject(error)
  }
)

// asking response 拦截器
asking.interceptors.response.use(response => {
  console.log('response', response)
  let data = response.data
  /// 根据不同的code进行处理
  if (data.code === 200) {
    return data.data
  } else if (data.code === 401) {
    Toast({
      message: data.msg
    })
  } else {
    Toast({
      message: data.msg
    })
  }
  return Promise.reject(data)
}, error => {
  console.log('errorResponse', error)
  Toast({
    message: error.msg
  })
  return Promise.reject(error)
})

export default asking
