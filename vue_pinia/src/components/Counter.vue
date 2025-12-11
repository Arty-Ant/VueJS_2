<script setup>
    import {useCounterStore} from '@/stores/counter'
    // получаем хранилище
const counter = useCounterStore()
// вызываем метод (действие)
counter.increment();
</script>

<template>
  <div class="greetings">
    <h1 class="green">Counter</h1>
    <h3>
     {{ counter.count }}
    </h3>
    <div><button @click="counter.increment()">ADD</button></div>
  </div>
</template>
