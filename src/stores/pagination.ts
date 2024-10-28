import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePaginationStore = defineStore('pagination', () => {

  const paged = ref(1)
  const perPaged = ref(10)

  const updatePage = (p: number) => paged.value = p
  const updatePerPage = (p: number) => perPaged.value = p

  return {
    paged,
    perPaged,
    updatePerPage,
    updatePage
  }
}, {
  persist: true
})