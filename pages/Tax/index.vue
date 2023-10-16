<template>
  <q-page class="row justify-center items-start content-start" :style-fn="myTweak">
    <div class="col-shrink">
      <TaxCalculatorContainer />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import TaxCalculatorContainer from "#c/Tax/container/TaxCalculatorContainer.vue";

defineProps<{
  title?: string,
  subTitle?: string
}>()

const myTweak = (offset: number) => {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh'
  }
}
</script>