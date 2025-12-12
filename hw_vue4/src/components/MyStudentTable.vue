<script setup>

defineProps({
  students: {
    type: Array,
    required: true,
  },
})
</script>

<template>
    
    <slot></slot>

    <table border="1">
            
            <tbody>
                <tr v-for = "item in students">
                    <td>
                        {{item.name}}</td>
                    <td>
                        {{item.age}}</td>
                    <td>
                        {{item.weight}}</td>
                </tr>
            </tbody>
            
    </table>
</template>

<style scoped>

</style>
