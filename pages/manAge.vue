<template>
  <q-page>
    <div class="row q-ma-lg justify-center items-start content-start">
      <div class="col q-ma-md">
        <container-calculator-man-age />
      </div>
    </div>
    <hr>
    <div class="row q-ma-lg">
      <container-desc-man-age />
    </div>
  </q-page>
</template>
<script setup lang="ts">
useHead({
  title: '만나이 계산기 - 만능계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '만나이 계산기, 나이 계산기, 만나이 계산, 나이 계산, 만나이, 나이'},
    {name: 'description', content: '한국의 만나이를 계산할 수 있는 편리한 계산기입니다. 입력하신 날짜 기준이나 오늘 날짜 기준으로 계산이 가능합니다. 미니멀한 컨셉으로 제작되었습니다.'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: '만나이 계산기 - 만능계산기'},
    {name: 'og:description', content: '한국의 만나이를 계산할 수 있는 편리한 계산기입니다. 입력하신 날짜 기준이나 오늘 날짜 기준으로 계산이 가능합니다. 미니멀한 컨셉으로 제작되었습니다.'},
    {name: 'og:url', content: 'https://god-caclulator.com/manAge'},
    {name: 'og:site_name', content: '만능 계산기'},
  ],
})
</script>