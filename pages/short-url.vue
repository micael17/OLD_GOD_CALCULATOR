<script setup lang="ts">
useHead({
  title: '단축 URL 만들기 - 갓 계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '단축 URL 만들기,짧은 URL 만들기,단축 URL 변환,짧은 URL 변환,네이버 단축 URL'},
    {name: 'description', content: '입력한 주소를 짧게 변환해주는 URL 변환기 입니다. 네이버 API를 사용했습니다. 단축 URL 만들기 - 갓 계산기에서 확인하세요.'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: '단축 URL 만들기 - 갓 계산기'},
    {name: 'og:description', content: '입력한 주소를 짧게 변환해주는 URL 변환기 입니다. 네이버 API를 사용했습니다. 단축 URL 만들기 - 갓 계산기에서 확인하세요.'},
    {name: 'og:url', content: 'https://god-caclulator.com/short-url'},
    {name: 'og:site_name', content: '갓 계산기'},
  ],
})
</script>

<template>
  <q-page>
    <div class="row q-ma-lg justify-center items-start content-start">
      <div class="col q-ma-md">
        <container-calculator-short-url />
      </div>
    </div>
    <hr>
    <div class="row q-ma-lg">
      <container-desc-short-url />
    </div>
  </q-page>
</template>

<style scoped>

</style>