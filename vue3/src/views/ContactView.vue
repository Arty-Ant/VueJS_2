<script setup>
import { useRouter, useRoute } from 'vue-router'

// получаем маршрутизатор (используем методы - например для выполнения программной навгации: метод push)
const router = useRouter()
// получаем маршрут
const route = useRoute()

console.log('route.name=' + route.name);


</script>

<template>
  <div class="contact">
    <h1>This is an contact page: routeName {{ $route.name }}</h1>
    <div>CONTACT CONTENT!!!</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

