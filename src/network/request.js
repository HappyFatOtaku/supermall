import axios from 'axios'

// const baseURL = "http://123.207.32.32:8000/api/vip"
const baseURL = "http://106.54.54.237:8000/api/v1"

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL,
    timeout: '5000'
  })

  // 2.axios的拦截器
  // 2.1.请求拦截
  instance.interceptors.request.use(
    config => {
      // 1.比如config中的一些信息不符合服务器的要求
      // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
      // 3.某些网络请求(比如登录(token)),必须携带一些特殊的信息
      // console.log(config)
      return config
    }, err => {
      // console.log(err)
    })

  // 2.2.响应拦截
  instance.interceptors.response.use(
    res => {
      // console.log(res)
      return res.data
    }, err => {
      // console.log(err)
    })

  // 3.发送真正的网络请求
  return instance(config)

}