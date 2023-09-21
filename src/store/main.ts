import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const count = ref(0)
  const name = ref('Kim')
  const doubleCount = computed(() => count.value * 2)
  const increment = () => { count.value++ }

  return {
    count, name, doubleCount, increment
  }
})