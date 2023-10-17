<script setup lang="ts">
defineProps<{
  title: string
  desc: string
}>()

</script>

<template>
  <div class="card">
    <div class="title">{{ title }}</div>
    <div class="definition">{{ desc }}</div>
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

  .title {
    font-size: 26px;
    font-weight: bold;
  }

  .definition {
    font-size: 18px;
    margin-top: 5px;
    white-space: pre-line; /* 연속적인 공백은 하나로 표시되며 줄바꿈은 적용됩니다. */
  }
</style>