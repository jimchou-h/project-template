import store from '../store'
// 封装请求对象
const BASE_URL = '/api'

function request({ url, data, method }) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + url,
      header: {
        icode: '8C4190D2E6F604D1',
        Authorization: store.state.user.token,
      },
      data,
      method,
      success({ data, statusCode, header }) {
        if (data.success) {
          resolve(data)
        } else {
          uni.showToast({
            title: data.message,
            icon: 'success',
            mask: true,
            duration: 3000,
          })
          reject(data.message)
        }
      },
      fail(error) {
        reject(error)
      },
      // 请求结束之后的回调
      complete: () => {
        // 关闭回调
        uni.hideLoading()
      },
    })
  })
}

export default request
