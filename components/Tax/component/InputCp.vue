<template>
  <q-input
    filled
    type="number"
    :model-value="value"
    @update:model-value="(value: number) => $emit('update:modelValue', Number(value))"
    :label="label"
    :hint="hint"
    :disable="disable"
    lazy-rules
  />
</template>

<script setup lang="ts">
defineProps<{
  value: number
  label: string
  hint?: string
  disable?: boolean
}>()
defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>