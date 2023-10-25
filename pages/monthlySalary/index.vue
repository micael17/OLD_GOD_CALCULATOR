<template>
  <q-page>
    <div class="row q-ma-lg justify-center items-start content-start">
        <monthly-salary-calculator-container />
    </div>
    <hr>
    <div class="row q-ma-lg">
      <monthly-salary-desc-container />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import MonthlySalaryCalculatorContainer from "#c/annualSalary/container/monthlySalaryCalculatorContainer.vue";
import MonthlySalaryDescContainer from "#c/annualSalary/container/monthlySalaryDescContainer.vue";

useHead({
  title: '월급 계산기 - 만능계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '월급 계산기, 월급 실수령액, 월급 실수령액 계산, 세금, 연봉, 월급, 계산기, 소득세, 지방 소득세, 국민연금, 건강보험, 장기요양보험, 고용보험'},
    {name: 'description', content: '심플한 월급 계산기입니다. 세금을 제외한 월급 실수령액을 확인해보세요.'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: '월급 계산기 - 만능계산기'},
    {name: 'og:description', content: '심플한 월급 계산기입니다. 세금을 제외한 월급 실수령액을 확인해보세요.'},
    {name: 'og:url', content: 'https://god-caclulator.com/monthlySalary'},
    {name: 'og:site_name', content: '만능 계산기'},
  ],
})
</script>