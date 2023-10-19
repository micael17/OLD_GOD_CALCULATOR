<script setup lang="ts">

</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
  .card {
    background: #f5f5f5;
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }
</style>