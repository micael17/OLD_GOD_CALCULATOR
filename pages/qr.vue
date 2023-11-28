<script setup lang="ts">
useHead({
  title: 'QR 코드 생성기 - 갓 계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: 'QR 코드 만들기, QR 코드 생성기, QR 코드 변환기'},
    {name: 'description', content: '링크나 URL을 QR 코드로 만들어주는 생성기입니다. 제품 설명이나 쇼핑 링크 등을 QR코드로 변환하고 싶을 때 사용하세요. QR 코드 생성기 - 갓 계산기에서 확인하세요.'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: 'QR 코드 생성기 - 갓 계산기'},
    {name: 'og:description', content: '링크나 URL을 QR 코드로 만들어주는 생성기입니다. 제품 설명이나 쇼핑 링크 등을 QR코드로 변환하고 싶을 때 사용하세요. QR 코드 생성기 - 갓 계산기에서 확인하세요.'},
    {name: 'og:url', content: 'https://god-caclulator.com/qr'},
    {name: 'og:site_name', content: '갓 계산기'},
  ],
})

</script>

<template>
  <q-page>
    <div class="row q-ma-lg justify-center items-start content-start">
      <div class="col q-ma-md">
        <containter-calculator-qr />
      </div>
    </div>
    <div class="row q-ma-lg">
      <div class="row q-ma-lg">
        <container-desc-qr />
      </div>
    </div>
  </q-page>
</template>

<style scoped>

</style>