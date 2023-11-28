<script setup lang="ts">
import DescCompInterest from "#c/container/desc/desc-comp-interest.vue";

useHead({
  title: '복리 계산기 - 갓 계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '복리 계산기, 복리 계산, 복리, 투자 수익 계산, 투자 수익, 투자, 저축, 수익'},
    {name: 'description', content: '각 종 투자 및 저축 등 복리 계산이 필요할 때 활용해보세요. 복리 계산기 - 갓 계산기에서 확인하세요.'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: '복리 계산기 - 갓 계산기'},
    {name: 'og:description', content: '각 종 투자 및 저축 등 복리 계산이 필요할 때 활용해보세요. 복리 계산기 - 갓 계산기에서 확인하세요.'},
    {name: 'og:url', content: 'https://god-caclulator.com/comp-interest'},
    {name: 'og:site_name', content: '갓 계산기'},
  ],
})
</script>

<template>
  <q-page>
    <container-calculator-comp-interest />
    <desc-comp-interest />
  </q-page>
</template>

<style scoped>

</style>