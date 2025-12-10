<script setup>
import MyProducts2 from '@/components/MyProducts2.vue';
import MyProducts1 from '@/components/MyProducts1.vue';
</script>

<template>
  <div>
     <MyProducts2 />
     <br>
     <MyProducts1 />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>