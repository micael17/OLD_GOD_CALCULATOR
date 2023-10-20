<script setup lang="ts">
defineProps<{
  title: string
  modelValue: string
  label?: string
  hint?: string
  disabled?: boolean
  readonly?: boolean
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input-group">
    <div class="input-title">{{ title }}</div>
    <div class="block">
      <input
          :value="modelValue"
          type="text"
          :disabled="disabled"
          :readonly="readonly"
          @input="$emit('update:modelValue', $event.target.value)"
      />
      <span>원</span>
    </div>
    <label v-if="hint && hint.length > 0">{{ hint }}</label>
  </div>
</template>

<style scoped>
  .input-group {
    margin-top: 8px;
    margin-bottom: 8px;

    .input-title {
      font-size: 22px;
      font-weight: 500;
    }

    & span {
      padding-left: 6px;
      font-size: 18px;
    }

    & input {
      font-size: 20px;
      border: 1px solid #ccc;
      border-radius: 3px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }

    & input[readonly] {
      background-color: #f0f0f0;
    }

    & label {
      left: 20px;
      color: #777;
      font-size: 15px;
      pointer-events: none; /* 라벨 요소를 클릭 및 이벤트에서 제외합니다 */
    }
  }
</style>