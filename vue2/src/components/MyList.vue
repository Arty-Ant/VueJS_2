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
    <list>
        <li>
            <ul>1</ul>
            <ul>2</ul>
            <ul>3</ul>
        </li>
    </list>


</template>

<style>

</style>