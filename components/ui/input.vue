<script setup lang="ts">
defineProps<{
  title: string
  placeHolder?: string
  type?: string
  modelValue: string
  postfix?: string
  label?: string
  hint?: string
  disabled?: boolean
  readonly?: boolean
  maxlength?: string
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input-group">
    <div class="input-title">{{ title }}</div>
    <div class="row">
      <input
          class="col"
          :value="modelValue"
          :disabled="disabled"
          :readonly="readonly"
          :placeholder="placeHolder"
          :type="type"
          :maxlength="maxlength"
          @input="$emit('update:modelValue', $event.target?.value)"
      />
      <span class="col-1" v-if="postfix">{{ postfix }}</span>
    </div>
    <label v-if="hint && hint.length > 0">{{ hint }}</label>
  </div>
</template>

<style scoped>
  .input-group {
    margin-top: 8px;
    margin-bottom: 8px;

    .input-title {
      font-size: 1.2rem;
      font-weight: 500;
    }

    & span {
      padding: 10px;
      font-size: 18px;
    }

    & input {
      padding: 10px;
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