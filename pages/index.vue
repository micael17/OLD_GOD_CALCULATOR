<script setup lang="ts">
useHead({
  title: '갓 계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '부가세 계산, 부가세 계산기, 글자수 계산기, 연봉 계산기, 연봉 실수령액, 월급 실수령액, 세금, 연봉, 월급, 영문주소 변환, 한글주소 변환,만나이 계산기, 나이 계산기'},
    {name: 'description', content: '생활 속에 필요한 유용한 기능을 담은 사이트입니다. 세금, 연봉 계산이나 글자수 체크, 영문 주소 변환 등 다양한 기능을 업데이트하고 있습니다.'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: '갓 계산기'},
    {name: 'og:description', content: '생활 속에 필요한 유용한 기능을 담은 사이트입니다. 세금, 연봉 계산이나 글자수 체크, 영문 주소 변환 등 다양한 기능을 업데이트하고 있습니다.'},
    {name: 'og:url', content: 'https://god-caclulator.com'},
    {name: 'og:site_name', content: '갓 계산기'},
  ],
})
</script>

<template>
  <q-page>
    <container-links-all />
  </q-page>
</template>