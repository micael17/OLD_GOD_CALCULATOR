<script setup lang="ts">
defineEmits(['update:input-updated'])
</script>

<template>
  <textarea id="textArea" placeholder="글자를 입력하세요..." @input="$emit('update:input-updated', $event.target.value)"></textarea>
</template>

<style scoped>
  textarea {
    width: 100%;
    height: 300px;
    resize: none; /* 사용자 크기 조정 비활성화 */
  }
</style>