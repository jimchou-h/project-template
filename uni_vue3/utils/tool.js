/**
 * 将 uni 方法封装成 promise ，方便使用
 */

/**
 * 封装一个getStorage， 可以用await
 */
export const getStorage = (key) => {
  return new Promise((resolve) => {
    uni.getStorage({
      key,
      success: (res) => {
        resolve(res.data)
      },
      fail: () => {
        resolve(null) // 返回空值
      },
    })
  })
}

/**
 * 封装一个Storage， 可以用await
 */
export const setStorage = (key, data) => {
  return new Promise((resolve, reject) => {
    uni.setStorage({
      key,
      data,
      success: () => {
        resolve()
      },
      fail: () => {
        reject() // 返回空值
      },
    })
  })
}
