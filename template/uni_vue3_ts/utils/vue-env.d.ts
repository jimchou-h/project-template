// <reference types="vite/client" />

declare module 'vue'
declare module 'vuex'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.ts'
