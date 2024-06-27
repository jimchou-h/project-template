<script setup name="page-index">
import { ref, onMounted } from 'vue'
import { login } from '@/api/modules/login'
console.log(login)

const page = ref(1)
const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
const initData = () => {
  setTimeout(() => {
    if (page.value === 1) {
      list.value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    } else {
      list.value.push(...list.value)
    }
  }, 1000)
}
const handleLoadMore = () => {
  page.value++
  initData()
}
const handleRefresh = () => {
  page.value = 1
  initData()
}
onMounted(() => {
  initData()
  login().then()
  setTimeout(() => {
    login().then()
  }, 1000)
})
</script>

<template>
  <CustomList
    ref="custom-list"
    :list="list"
    style="height: calc(100vh - 88rpx)"
    @loadmore="handleLoadMore"
    @refresh="handleRefresh"
  >
    <template #item="{ item }">
      <view class="list-item">
        {{ item }}
      </view>
    </template>
  </CustomList>
</template>

<style lang="scss" scoped>
.list-item {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
</style>
