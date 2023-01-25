import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: '张三',
  }),
  actions: {
    updateName(this: any, name: string) {
      this.name = name
    },
    updateNameLate(this: any, name: string) {
      this.name = name
    },
  },
})
