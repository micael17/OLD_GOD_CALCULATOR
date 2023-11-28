<template>
  <q-page>
    <div class="row q-ma-lg justify-center items-start content-start">
      <div class="col q-ma-lg">
        <container-calculator-nh />
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
useHead({
  title: 'NH 계산기 - 갓 계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '농협, 지역농협 공급가 및 부가세 계산기'},
    {name: 'description', content: '농협, 지역농협 공급가 및 부가세 계산기'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: 'NH 계산기 - 갓 계산기'},
    {name: 'og:description', content: '농협, 지역농협 공급가 및 부가세 계산기'},
    {name: 'og:url', content: 'https://god-caclulator.com/nh'},
    {name: 'og:site_name', content: '갓 계산기'},
  ],
})
</script>