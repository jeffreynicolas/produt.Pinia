import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('product', () => {
  const product = ref([
    { id: 1, name: 'Liquitificador', price: '45,2', qty: '100' },
    { id: 2, name: 'Liquitificador', price: '40,2', qty: '100' },
    { id: 3, name: 'Liquitificador', price: '78,2', qty: '100' }
  ])
  return { product }
})
