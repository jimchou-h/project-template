import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni' // 一定要用这个，不然会报错
import { resolve } from 'path'
import VueSetupExtend from 'vite-plugin-vue-setup-extend' // script setup标签上可以写组件名称name

function _resolve(path) {
  return resolve(__dirname, path)
}

export default defineConfig({
  plugins: [uni(), VueSetupExtend()],
  resolve: {
    alias: {
      '@': _resolve('./src'),
    },
  },
  css: {
    preprocessorOptions: {
      // 设置scss全局变量
      scss: {
        additionalData: '@import "/styles/variables.scss";',
      },
    },
  },
  // server: {
  //   host: '0.0.0.0',
  //   port: 3005,
  //   open: true,
  //   proxy: {
  //     '/api': {
  //       target: 'http://192.168.8.95:8080',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
})
