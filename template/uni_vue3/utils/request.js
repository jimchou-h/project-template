// import store from '../store'
// 封装请求对象
const BASE_URL = ''

let loadingNum = 0
function request(
  { url, data, method = 'GET' },
  options = {
    showLoading: true,
  },
) {
  return new Promise((resolve, reject) => {
    if (options.showLoading) {
      loadingNum++
      uni.showLoading()
    }
    uni.request({
      url: BASE_URL + url,
      header: {
        // Authorization: store.state.user.token,
      },
      data,
      method,
      success({ data, statusCode }) {
        if ((data.code || statusCode) === 200) {
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
        if (options.showLoading) {
          loadingNum--
          if (loadingNum === 0) {
            // 关闭回调
            uni.hideLoading()
          }
        }
      },
    })
  })
}

export default request
