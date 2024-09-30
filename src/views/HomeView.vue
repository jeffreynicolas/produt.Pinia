<script setup>
import router from '@/router'
import{useProductStore} from '@/stores/couter.js'
const productStore = useProductStore() 
const router = userouter()

function visualiza(id) {
  router.push('/product/${id}')
}
</script>

<template>

<H1>Listagem de produtos</H1>  

<table>
  <thead>
    <tr>#</tr>
  <tr>Home</tr>
  <tr>Preço</tr>
  <tr>Ações</tr>
  </thead>
  <tbody>
    <tr v-for= "product in productStore.product" :Key='product.id'>
<td>{{ product.id}}</td>
<td>{{ product.name}}</td>
<td>{{ product.price}}</td>
<td><button>@click="visualizar(product.id)"</button></td>
<td><button>@click=</button></td>

    </tr>
  </tbody>
</table>

</template>
