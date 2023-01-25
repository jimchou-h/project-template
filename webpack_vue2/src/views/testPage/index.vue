<template>
  <div>
    Test Page {{ isLogin }}
    <el-button @click="handleClick">点击</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TestPage',
  computed: {
    ...mapGetters(['isLogin']),
  },
  methods: {
    // ...mapMutations(['SET_ISLOGIN']),
    handleClick() {
      this.$store.commit('SET_ISLOGIN', true)
    },
  },
}
</script>

<style></style>
