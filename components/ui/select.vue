<script setup lang="ts">
defineProps<{
  title?: string
  options: [{
    value: string | number
    label: string | number
  }]
  type?: string
  modelValue: any
}>()

defineEmits(['update:modelValue'])

</script>

<template>
  <div class="select-group">
    <div class="title">{{ title || '&nbsp;' }}</div>
    <div class="row">
      <select :value="modelValue" @change="$emit('update:modelValue', $event.target?.value)">
        <template v-for="option in options">
          <option :value="option.value">{{option.label}}</option>
        </template>
      </select>
    </div>
  </div>
</template>

<style scoped>
  .select-group {
    margin-top: 8px;
    margin-bottom: 8px;

    .title {
      font-size: 1.2rem;
      font-weight: 500;
    }

    & select {
      padding: 11.5px;
      border: 1px solid #ccc;
      border-radius: 3px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }

    & select[readonly] {
      background-color: #f0f0f0;
    }
  }
</style>