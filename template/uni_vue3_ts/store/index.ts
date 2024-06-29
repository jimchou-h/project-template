import Vue from 'vue'
import Vuex from 'vuex'
// import user from './modules/user'

console.log(Vuex)

Vue.use(Vuex)

const store = new Vuex.Store({
  // 模块
  modules: {
    user,
  },
})

export default store
