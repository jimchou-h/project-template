import { createStore } from 'vuex'
import user from './modules/user'

const store = createStore({
  modules: {
    user,
  },
})

console.log(store)

export default store
