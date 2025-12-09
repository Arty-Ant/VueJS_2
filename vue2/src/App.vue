<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import {ref} from 'vue'
// script setup + Composition API
// переменная t1
const t1 = "TEST1";
console.log(t1);

// реактиная переменная (модель данных) - используем API реактивности
const message = ref('MY MESSAGE'); // используем ф-ю
// выводим значениу реактивное переменной (для доступа необходимо использовать свойство value)
console.log(message.value);

message.value = 'RR';

// methods
function printMessage(){
  console.log(message.value)
}
// lifecucle hooks
// created -> реализация script setup
// mounted -> onMounted

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <p>T1: {{ t1 }}</p> <br>
    <p>MESSAGE {{ message }}</p>
    <input type="text" v-model="message">
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
