const common = {
  state: {
    isLogin: false,
  },
  mutations: {
    SET_ISLOGIN: (state, isLogin) => {
      state.isLogin = isLogin
    },
  },
}

export default common
