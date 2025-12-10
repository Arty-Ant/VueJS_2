<script setup>
import { onMounted } from 'vue';

defineProps({
  list: {
    type: Array,
    required: true,
  },
})
// события компонента
const emit = defineEmits(['change', 'delete'])
const handleClick = () => {console.log('before emit'); emit('change')}

//lifecycle hooks (onX)
//mounted -> onMounted()
onMounted(() => {console.log('onMounted!!!');})
//updated -> onUpdated()
//unmounted -> onUnmounted()
</script>

<template>
    <h3>Список:</h3>
    <ul>
        <li v-for="item in list">{{ item }}</li>
    </ul>

    <button @click="handleClick">doIt!!!</button>
</template>