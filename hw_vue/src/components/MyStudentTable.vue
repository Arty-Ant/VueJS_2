<script setup>
    var students = [
        {
        name: "Vasia",
        age: 19,
        weight: 67
        },
        {
        name: "Lena",
        age: 18,
        weight: 52
        },
        {
        name: "Misha",
        age: 20,
        weight: 78
        },
        {
        name: "Katia",
        age: 17,
        weight: 45
        },
    ]
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
