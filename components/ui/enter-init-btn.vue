<script setup lang="ts">
defineProps<{
  submitLabel?: string
  resetLabel?: string
}>()
</script>

<template>
  <div class="q-pa-md q-gutter-sm row justify-evenly">
    <q-btn :label="submitLabel || '계산 (엔터)'" type="submit" color="primary" size="lg"/>
    <q-btn :label="resetLabel || '초기화'" type="reset" color="white" text-color="black" size="lg" class="q-ml-sm" />
  </div>
</template>

<style scoped>

</style>