<script setup>
  import MyStudentTable from './components/MyStudentTable.vue';
  import MyButton from './components/MyButton.vue';
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
<MyStudentTable>
  
    <p>My new caption</p>

</MyStudentTable>
<br>
<MyButton></MyButton>
</template>

<style scoped></style>
