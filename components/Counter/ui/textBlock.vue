<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
}>()
</script>

<template>
  <div>{{ title }} <span>{{ value }}</span></div>
</template>

<style scoped>
div > span {
  font-size: large;
  font-weight: bold;
}
</style>