<template>
  <q-page>
    <div class="row q-ma-lg justify-center items-start content-start">
      <annual-salary-calculator-container />
    </div>
    <hr>
    <div class="row q-ma-lg">
    </div>
  </q-page>
</template>
<script setup lang="ts">
import AnnualSalaryCalculatorContainer
  from "#c/annualSalary/container/annualSalaryCalculatorContainer.vue";


useHead({
  title: '연봉 계산기 - 만능계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '연봉 계산기, 월급 계산기, 연봉 계산, 월급 계산, 세금, 연봉, 월급, 계산기, 소득세, 지방 소득세, 소득 계산기'},
    {name: 'description', content: '심플한 연봉 계산기입니다. 연봉 또는 월급으로 세금을 제외한 실수령 금액을 확인해보세요.'}
  ],
})
</script>