<script setup lang="ts">
  defineProps<{
    title: string
    loading?: boolean
  }>()

  defineEmits(['onSubmit', 'onReset'])
</script>

<template>
  <q-form
      @submit="$emit('onSubmit')"
      @reset="$emit('onReset')"
  >
    <div class="container">
      <div class="left">
        <h4>{{ title }}</h4>
        <hr>
        <slot name="input" />
        <hr>
        <div class="q-pa-md q-gutter-sm row justify-evenly">
          <slot name="btn" />
        </div>
      </div>
      <div class="right relative-position">
        <q-inner-loading :showing="loading">
          <q-spinner-gears size="50px" color="primary" />
        </q-inner-loading>
        <slot name="result" />
      </div>
    </div>
  </q-form>
</template>

<style scoped>
/* 모바일 화면 감지 */
@media only screen and (max-width: 768px) {
  .container {
    display: block;
  }

  .right {
    margin-top: 2rem;
    padding: 1rem;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1);
  }
}

/* 데스크톱 화면 감지 */
@media only screen and (min-width: 769px) {
  .container {
    display: flex;
    align-items: center; /* 세로 가운데 정렬 */
    justify-content: center; /* 가로 가운데 정렬 */
  }

  .left, .right {
    flex: 1; /* 좌우 두 영역을 동일한 너비로 설정 */
    padding: 30px; /* 좌우 여백 추가 */
    box-sizing: border-box; /* 패딩을 요소의 너비에 포함 */
  }

  .right {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1);
  }
}



</style>