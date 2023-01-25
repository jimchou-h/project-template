import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//默认超时时间
axios.defaults.timeout = 10000
//返回其他状态码
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500
}
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true
// NProgress 配置
NProgress.configure({
  showSpinner: false,
})
//http request拦截
axios.interceptors.request.use(
  (config) => {
    //开启 progress bar
    NProgress.start()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
//http response 拦截
axios.interceptors.response.use(
  (res) => {
    //关闭 progress bar
    NProgress.done()
    return res
  },
  (error) => {
    NProgress.done()
    return Promise.reject(new Error(error))
  }
)

export default axios
