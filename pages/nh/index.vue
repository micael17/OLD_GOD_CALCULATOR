<template>
  <q-page class="row justify-center items-start content-start">
    <div class="col-shrink">
      <NhCalculatorContainer />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import NhCalculatorContainer from "#c/Tax/container/NhCalculatorContainer.vue";

useHead({
  title: 'NH 계산기 - 만능계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '농협, 지역농협 공급가 및 부가세 계산기'},
    {name: 'description', content: '농협, 지역농협 공급가 및 부가세 계산기'}
  ],
})
</script>