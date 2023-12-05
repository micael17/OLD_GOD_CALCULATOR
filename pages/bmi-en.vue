<script setup lang="ts">
useHead({
  title: 'BMI(Body Mass Index) Calculator - Simple, Fast, Easy.',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: 'BMI calculator,' +
          'Body Mass Index calculator,' +
          'Health calculator,' +
          'Weight and height calculator,' +
          'Obesity measurement tool,' +
          'Ideal weight calculator,' +
          'Health assessment tool,' +
          'BMI index checker,' +
          'Weight management tool,' +
          'Fitness calculator,' +
          'Body composition calculator,' +
          'Health metrics calculator'},
    {name: 'description', content: 'You can calculate BMI. BMI is calculated based on height and weight, providing an approximate indication of obesity. Check your BMI (Body Mass Index) using this calculator.'},
    {name: 'og:locale', content: 'en_US'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: 'BMI(Body Mass Index) Calculator - Simple, Fast, Easy.'},
    {name: 'og:description', content: 'You can calculate BMI. BMI is calculated based on height and weight, providing an approximate indication of obesity. Check your BMI (Body Mass Index) using this calculator.'},
    {name: 'og:url', content: 'https://god-caclulator.com/bmi_en'},
    {name: 'og:site_name', content: 'God Calculator'},
  ],
})
</script>

<template>
  <q-page>
    <container-calculator-bmi-en />
    <hr>
    <container-desc-bmi-en />
  </q-page>
</template>

<style scoped>

</style>