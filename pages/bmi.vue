<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n()

useHead({
  title: 'BMI(체질량지수) 계산기 - 갓 계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: 'BMI, 체질량 지수, 체질량 계산기, 체질량지수 계산기, BMI 측정, 체질량 측정, 비만도 측정, 비만도 계산, 체질량, 계산'},
    {name: 'description', content: 'BMI를 측정 계산할 수 있습니다. BMI는 키와 몸무게를 통해 계산하며, 대략적인 비만도를 확인할 수 있습니다. BMI(체질량지수) 계산기 - 갓 계산기에서 확인하세요.'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: 'BMI(체질량지수) 계산기 - 갓 계산기'},
    {name: 'og:description', content: 'BMI를 측정 계산할 수 있습니다. BMI는 키와 몸무게를 통해 계산하며, 대략적인 비만도를 확인할 수 있습니다. BMI(체질량지수) 계산기 - 갓 계산기에서 확인하세요.'},
    {name: 'og:url', content: 'https://god-caclulator.com/bmi'},
    {name: 'og:site_name', content: '갓 계산기'},
  ],
})
</script>

<template>
  <q-page>
    <container-calculator-bmi />
    <hr>
    <container-desc-bmi />
  </q-page>
</template>

<style scoped>

</style>