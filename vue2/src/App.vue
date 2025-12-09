<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import MyButton from './components/MyButton.vue'
import MyList from './components/MyList.vue'


import {ref, computed} from 'vue'
// script setup + Composition API
// переменная t1
const t1 = "TEST1";
console.log(t1);

// реактиная переменная (модель данных) - используем API реактивности
const message = ref('MY MESSAGE'); // используем ф-ю ref - в качестве параметра значение (примитив), объект
// выводим значениу реактивное переменной (для доступа необходимо использовать свойство value)
console.log(message.value);

message.value = 'RR';

const counter = ref(1);

// methods
function printMessage(){
  console.log(message.value);
}
// API реактивности - вычисляемые свойства
const formattedMessage = computed(() => {
  return message.value + ' POSTFIX';
})

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
    <p>COUNTER {{ counter }}</p>
    <p>FORMATTED MESSAGE: {{ formattedMessage }}</p>
    <input type="text" v-model="message">
    <button @click="printMessage">TEST</button>
    <br>
    <MyButton title="TEST"></MyButton>
    <br>
    <MyButton title="OK"></MyButton>
    <MyList></MyList>
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
