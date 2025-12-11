import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// функция, которая опраделяет реактивные свойства и методы, и возвращает объект со свойствами и методами

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  // методы - могут использоваться для изменения состояния в различных компонентах
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
