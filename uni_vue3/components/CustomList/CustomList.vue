<script setup name="custom-list">
import { ref, watch } from 'vue'
// import { onReachBottom } from '@dcloudio/uni-app'
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
})
watch(
  () => props.list,
  () => {
    console.log('触发2')
    if (emitsType.value === 'loadmore') {
      loading.value = false
    }
    if (emitsType.value === 'refresh') {
      refresherTrigger.value = false
    }
  },
  {
    deep: true,
  },
)
const emits = defineEmits(['refresh', 'restore', 'loadmore'])
const emitsType = ref('loadmore')

const refresherTrigger = ref(true)
const loading = ref(false)
const loadingMoreEvent = () => {
  if (loading.value) return
  emitsType.value = 'loadmore'
  emits('loadmore')
  loading.value = true
}
const onRefresh = () => {
  console.log('触发')
  emitsType.value = 'refresh'
  emits('refresh')
}
const onRestore = () => {
  refresherTrigger.value = 'restore'
  emits('restore')
}
</script>

<template>
  <view class="list-container">
    <scroll-view
      ref="scrollView"
      class="list-content"
      refresher-enabled
      :refresher-triggered="refresherTrigger"
      :scroll-y="true"
      :lower-threshold="100"
      @scrolltolower="loadingMoreEvent"
      @refresherrefresh="onRefresh"
      @refresherrestore="onRestore"
    >
      <view v-for="(item, index) in props.list" :key="index">
        <slot name="item" :item="item"></slot>
      </view>
      <view v-if="loading" class="loading-text">加载中...</view>
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
.list-container {
  width: 100%;
  height: 100%;
  .list-content {
    height: 100%;
  }
  .loading-text {
    text-align: center;
    padding: 10px;
    color: #888;
  }
}
</style>
