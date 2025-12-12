<script setup>
  import { ref } from 'vue';
  import MyStudentTable from './components/MyStudentTable.vue';
  import MyButton from './components/MyButton.vue';

  const students = ref ([
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
  ])

    
    function cut() {
      students.value.pop();

}
</script>

<template>

<MyStudentTable :students="students">
  
    <p>My new caption</p>

</MyStudentTable>
<br>
<MyButton @cut="cut"></MyButton>
</template>

<style scoped></style>
