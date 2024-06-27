<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ titleRef }}</text>
    </view>
    <u-button>{{ defaultForm.name }}</u-button>
  </view>
</template>

<script lang="ts">
export default {
  name: 'AdminIndex',
}
</script>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import { DefaultForm } from '@/types/common'
const titleRef: Ref<string> = ref('12345')
const defaultForm: DefaultForm = {
  name: '张三',
  age: 14,
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
