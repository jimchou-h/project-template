class StoragePackaging {
  constructor(storage) {
    this.storage = storage || window.localStorage
  }

  /**
   * 通过key获取值
   * @param {string} key
   */
  get(key) {
    try {
      const value = this.storage.getItem(key)
      return value ? JSON.parse(value) : null
    } catch (error) {
      throw Error(`get ${key} failed: ${error}`)
    }
  }

  /**
   * 通过key设置值
   * @param {string} key
   * @param {any} value
   */
  set(key, value) {
    try {
      this.storage.setItem(key, JSON.stringify(value))
    } catch (error) {
      throw Error(`set ${key} failed: ${error}`)
    }
  }

  /**
   * 通过key删除值
   * @param {string} key
   */
  remove(key) {
    try {
      this.storage.removeItem(key)
    } catch (error) {
      throw Error(`remove ${key} failed: ${error}`)
    }
  }

  /**
   * 删除所有的值
   */
  clear() {
    try {
      this.storage.clear()
    } catch (error) {
      throw Error(`clear failed: ${error}`)
    }
  }
}

const localStorage = new StoragePackaging(window.localStorage)
const sessionStorage = new StoragePackaging(window.sessionStorage)

export { localStorage, sessionStorage }
