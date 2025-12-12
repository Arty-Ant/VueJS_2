<script setup>
    import { onMounted } from 'vue';
const emit = defineEmits(['cut'])
const cut = () => {emit('cut')}
onMounted(() => {console.log('onMounted!');})
</script>

<template>
    <button @click="cut">
        Удалить студента
    </button>
</template>

<style scoped>

</style>
