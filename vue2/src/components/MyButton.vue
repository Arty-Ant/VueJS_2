<script setup>

    defineProps({
        title:{
            type: String,
            required: true,
        },
    })
// defineProps({title: {type: String}})
</script>

<template>
    <button>{{ title }}</button>


</template>

<style>
button {
  font-weight: bold;
}

</style>